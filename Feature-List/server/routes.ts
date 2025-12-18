import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, requireAdmin, requireAuth, hashPassword } from "./auth";
import { insertCategorySchema, insertProductSchema, insertOrderSchema } from "@shared/schema";
import { User as SelectUser } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup authentication
  setupAuth(app);

  // ===== PUBLIC API ROUTES =====
  
  // Get all categories (public)
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Get all products (public) with search and sorting
  app.get("/api/products", async (req, res) => {
    try {
      const { categoryId, featured, search, sort } = req.query;
      const filters: { categoryId?: string; isActive?: boolean; isFeatured?: boolean } = {
        isActive: true,
      };
      if (categoryId) filters.categoryId = categoryId as string;
      if (featured === "true") filters.isFeatured = true;
      
      let products = await storage.getAllProducts(filters);

      // Search by name or description
      if (search) {
        const searchLower = (search as string).toLowerCase();
        products = products.filter(p => 
          p.name.toLowerCase().includes(searchLower) || 
          (p.description && p.description.toLowerCase().includes(searchLower))
        );
      }

      // Sort
      if (sort === "price-asc") {
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sort === "price-desc") {
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (sort === "newest") {
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else if (sort === "popular") {
        // Default sort, already newest first
      }
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get single product (public)
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Create order (public - customers can place orders)
  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(orderData);
      res.status(201).json(order);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create order" });
    }
  });

  // ===== CUSTOMER API ROUTES =====

  // Get customer profile
  app.get("/api/customers/profile", requireAuth, (req, res) => {
    try {
      const user = req.user as SelectUser;
      const { password, ...safeUser } = user;
      res.json(safeUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch profile" });
    }
  });

  // Update customer profile
  app.put("/api/customers/profile", requireAuth, async (req, res) => {
    try {
      const user = req.user as SelectUser;
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const updated = await storage.updateUser(user.id, { email });
      if (!updated) {
        return res.status(404).json({ message: "User not found" });
      }

      const { password, ...safeUser } = updated;
      res.json(safeUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update profile" });
    }
  });

  // Get customer order history
  app.get("/api/customers/orders", requireAuth, async (req, res) => {
    try {
      const user = req.user as SelectUser;
      const orders = await storage.getCustomerOrders(user.email || user.username);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });

  // Get single customer order
  app.get("/api/customers/orders/:id", requireAuth, async (req, res) => {
    try {
      const user = req.user as SelectUser;
      const order = await storage.getOrder(req.params.id);
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // Verify ownership
      if (order.customerEmail !== user.email && order.customerEmail !== user.username) {
        return res.status(403).json({ message: "You do not have access to this order" });
      }

      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch order" });
    }
  });

  // ===== ADMIN API ROUTES =====

  // Dashboard stats
  app.get("/api/admin/stats", requireAdmin, async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });

  // ===== ADMIN CATEGORIES =====
  
  app.get("/api/admin/categories", requireAdmin, async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.post("/api/admin/categories", requireAdmin, async (req, res) => {
    try {
      const categoryData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(categoryData);
      res.status(201).json(category);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create category" });
    }
  });

  app.put("/api/admin/categories/:id", requireAdmin, async (req, res) => {
    try {
      const category = await storage.updateCategory(req.params.id, req.body);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update category" });
    }
  });

  app.delete("/api/admin/categories/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteCategory(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Failed to delete category" });
    }
  });

  // ===== ADMIN PRODUCTS =====

  app.get("/api/admin/products", requireAdmin, async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.post("/api/admin/products", requireAdmin, async (req, res) => {
    try {
      const productData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(productData);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create product" });
    }
  });

  app.put("/api/admin/products/:id", requireAdmin, async (req, res) => {
    try {
      const product = await storage.updateProduct(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update product" });
    }
  });

  app.delete("/api/admin/products/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteProduct(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Failed to delete product" });
    }
  });

  // ===== ADMIN ORDERS =====

  app.get("/api/admin/orders", requireAdmin, async (req, res) => {
    try {
      const { status } = req.query;
      const filters = status ? { status: status as string } : undefined;
      const orders = await storage.getAllOrders(filters);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });

  app.get("/api/admin/orders/:id", requireAdmin, async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch order" });
    }
  });

  app.put("/api/admin/orders/:id", requireAdmin, async (req, res) => {
    try {
      const order = await storage.updateOrder(req.params.id, req.body);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update order" });
    }
  });

  app.delete("/api/admin/orders/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteOrder(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Failed to delete order" });
    }
  });

  // ===== ADMIN USERS =====

  app.get("/api/admin/users", requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      const safeUsers = users.map(({ password, ...user }) => user);
      res.json(safeUsers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  // Create admin user endpoint (for initial setup)
  app.post("/api/admin/create-admin", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      const existingAdmins = users.filter(u => u.isAdmin);
      
      // Only allow creating admin if no admins exist
      if (existingAdmins.length > 0) {
        return res.status(403).json({ message: "Admin user already exists. Please login." });
      }

      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const user = await storage.createUser({
        username: req.body.username,
        password: await hashPassword(req.body.password),
        email: req.body.email,
        isAdmin: true,
      });

      const { password, ...safeUser } = user;
      res.status(201).json(safeUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to create admin" });
    }
  });

  return httpServer;
}
