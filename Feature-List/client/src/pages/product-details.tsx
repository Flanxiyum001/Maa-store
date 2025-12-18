import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/data";
import { useCart } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ArrowLeft, Truck, ShieldCheck, Leaf } from "lucide-react";
import { useState } from "react";
import NotFound from "./not-found";
import { formatPrice } from "@/lib/currency";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCart(state => state.addToCart);
  const { toast } = useToast();

  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast({
      title: "Added to basket",
      description: `${quantity}x ${product.name} added to your basket.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Section */}
            <div className="relative aspect-square bg-secondary/30 rounded-2xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-foreground mb-6">
                {formatPrice(product.price)}
              </p>
              
              <div className="prose prose-stone text-muted-foreground mb-8">
                <p>{product.description}</p>
                <p>Grown locally with sustainable farming practices. Picked fresh and delivered within 24 hours.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-input rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="lg" className="flex-1 h-12 text-lg" onClick={handleAddToCart}>
                    Add to Basket
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t">
                  <div className="text-center space-y-2">
                    <Leaf className="h-6 w-6 mx-auto text-primary" />
                    <span className="text-xs font-medium block">Organic</span>
                  </div>
                  <div className="text-center space-y-2">
                     <Truck className="h-6 w-6 mx-auto text-primary" />
                     <span className="text-xs font-medium block">Fast Delivery</span>
                  </div>
                  <div className="text-center space-y-2">
                     <ShieldCheck className="h-6 w-6 mx-auto text-primary" />
                     <span className="text-xs font-medium block">Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}