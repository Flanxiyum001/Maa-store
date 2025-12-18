import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/currency";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCart(state => state.addToCart);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id);
    toast({
      title: "Added to basket",
      description: `${product.name} has been added to your basket.`,
    });
  };

  return (
    <Link href={`/product/${product.id}`} className="block group h-full">
      <Card className="h-full border border-border/40 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 bg-background/50 hover:bg-background rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-secondary/30 to-secondary/10">
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Button 
              onClick={handleAddToCart}
              className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg rounded-full hover:scale-110 active:scale-95"
              size="icon"
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-5 space-y-2">
            <p className="text-xs font-medium text-primary/70 uppercase tracking-widest">
              {product.category}
            </p>
            <h3 className="font-serif font-medium text-lg leading-tight group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-baseline gap-2 pt-2">
              <span className="font-bold text-2xl text-primary">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}