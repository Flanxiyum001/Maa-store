import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-2">Our Store</h1>
              <p className="text-muted-foreground">Premium cold-pressed oils, organic dhals, millets, ghee, honey, and traditional batters from Hyderabad.</p>
            </div>
          </div>

          {/* Category Filter - Horizontal scroll on mobile */}
          <div className="mb-12 -mx-4 px-4">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className="animate-in fade-in duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No products found in this category.</p>
              <Button 
                variant="link" 
                onClick={() => setSelectedCategory("All")}
                className="text-primary"
              >
                View all products
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}