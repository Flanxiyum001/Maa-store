import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/ui/cart-drawer";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCart } from "@/lib/store";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [location] = useLocation();
  const itemCount = useCart(state => state.getItemCount());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
          <img src="/favicon.png" alt="Maa Store Logo" className="h-12 w-12 object-contain" />
          <span className="hidden sm:inline text-2xl font-serif font-bold text-primary tracking-tight">Maa Store</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-all duration-300 relative group ${location === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/shop" className={`text-sm font-medium transition-all duration-300 relative group ${location === '/shop' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-all duration-300 relative group hover:text-primary">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative w-64 group">
             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
             <Input 
               type="search" 
               placeholder="Search oils..." 
               className="pl-9 h-9 bg-secondary/40 border-secondary hover:border-primary/30 focus:border-primary/50 focus:bg-background transition-all duration-300" 
             />
          </div>

          <ThemeToggle />

          <CartDrawer>
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary/50 transition-all duration-300">
              <ShoppingCart className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Button>
          </CartDrawer>
          
          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary/50 transition-all duration-300">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/shop" className="text-lg font-medium hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                    Shop
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </Link>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}