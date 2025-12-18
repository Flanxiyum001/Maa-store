import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/lib/store";
import { products } from "@/lib/data";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "wouter";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { formatPrice } from "@/lib/currency";

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [, setLocation] = useLocation();

  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  }).filter(item => item.product);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Your Basket</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <p>Your basket is empty</p>
            <Button variant="link" className="mt-2" asChild>
              <SheetPrimitive.Close asChild>
                <Link href="/shop">Continue Shopping</Link>
              </SheetPrimitive.Close>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6 my-4">
              <div className="flex flex-col gap-4">
                {cartItems.map(({ productId, quantity, product }) => (
                  <div key={productId} className="flex gap-4">
                    <div className="h-20 w-20 rounded-md bg-secondary overflow-hidden shrink-0">
                      <img 
                        src={product?.image} 
                        alt={product?.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{product?.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatPrice(product?.price || 0)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => updateQuantity(productId, quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-4 text-center">{quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => updateQuantity(productId, quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-auto text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(productId)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="pt-4">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-lg">{formatPrice(getCartTotal())}</span>
              </div>
              <SheetPrimitive.Close asChild>
                <Button className="w-full" size="lg" onClick={() => setLocation("/checkout")}>
                  Proceed to Checkout
                </Button>
              </SheetPrimitive.Close>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}