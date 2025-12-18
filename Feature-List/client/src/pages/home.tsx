import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products, heroImage, categoryCards } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Leaf, Truck, ShieldCheck, Droplet } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Premium cold-pressed oils and organic products" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-primary font-medium text-sm hover:bg-primary/20 transition-all duration-300 cursor-default">
                🌾 From Hyderabad, India
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Organic, Pure <br/>
                <span className="text-accent">Nature's Goodness.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-lg font-light">
                Cold-pressed oils, organic dhals, millets, ghee, honey, and traditional batters. Everything sourced naturally and crafted with care.
              </p>
              <div className="flex gap-4 pt-6">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg" asChild>
                  <Link href="/shop">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/40 text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-300" asChild>
                  <Link href="/about">
                    Our Story
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "100% Organic", desc: "No chemicals, no additives. Pure, natural products crafted traditionally." },
                { icon: Truck, title: "Direct Delivery", desc: "From Hyderabad to your doorstep. Fresh and carefully packaged." },
                { icon: ShieldCheck, title: "Quality Assured", desc: "Every product tested and verified. Full satisfaction guaranteed." }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-background/40 border border-border/40 hover:border-primary/30 hover:bg-background/70 transition-all duration-500 group cursor-default">
                    <div className="h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Explore our wide range of premium products organized by category.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700 delay-200">
              {categoryCards.map((category, idx) => (
                <div key={category.name} className="animate-in fade-in duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Best Sellers</h2>
                <p className="text-muted-foreground max-w-md">Premium products loved by our customers. Fresh, organic, and traditionally made.</p>
              </div>
              <Button variant="link" className="text-primary hover:text-primary/80 transition-colors duration-300" asChild>
                <Link href="/shop">
                  View All Products →
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700 delay-200">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
           {/* Organic background shapes */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-40" />
           
           <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl mx-auto">
             <div className="flex justify-center mb-6 animate-float">
               <Droplet className="h-12 w-12 text-accent/80" />
             </div>
             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Got Questions? Let's Connect!</h2>
             <p className="text-lg text-primary-foreground/90 mb-8">
               Reach out to us on WhatsApp for exclusive offers, product inquiries, recipes, health tips, and updates on our freshest products. We're here to help!
             </p>
             <Button size="lg" className="h-12 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold shadow-lg" asChild>
               <a href="https://wa.me/919834000987" target="_blank" rel="noopener noreferrer">
                 Chat on WhatsApp
               </a>
             </Button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}