import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Leaf, Users, Droplet, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import storeImage from "@assets/generated_images/maa_store_facility.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/20 via-transparent to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-700">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Maa Traditional Lifestyle Store</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Celebrating the purity of nature and empowering tribal communities through authentic, chemical-free products
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Maa Traditional Lifestyle Store is a manufacturer and retailer of cold-pressed oils and traditional food products, sourced directly from tribal communities and their colonies.
                  </p>
                  <p>
                    All our oils are stone-pressed, chemical-free, and produced in-house with no added preservatives or additives. We believe in delivering nature's goodness in its purest form.
                  </p>
                  <p>
                    Our commitment extends beyond commerce—we ensure that tribal communities are elevated and supported, creating sustainable livelihoods while preserving traditional knowledge and practices.
                  </p>
                </div>
              </div>
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                <img 
                  src={storeImage} 
                  alt="Maa Traditional Lifestyle Store Facility" 
                  className="rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every product we offer is handcrafted and sourced authentically from our tribal partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cold-Pressed Oils", items: ["Groundnut Oil", "Coconut Oil", "Sesame Oil", "Mustard Oil", "Safflower Oil", "Castor Oil"] },
                { title: "Essential Oils", items: ["Pure Essential Oil Blends", "Therapeutic Oils", "Wellness Oils", "Traditional Aromatics"] },
                { title: "Traditional Foods", items: ["Rice & Millet Varieties", "Jaggery", "Pure Ghee", "Tribal Forest Products", "Heritage Grains"] }
              ].map((category, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-2xl bg-background border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-in fade-in duration-500"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="font-serif text-xl font-bold mb-4 text-primary">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands of customers supporting traditional heritage and tribal communities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: "100%", label: "Organic", icon: "🌾" },
                { number: "50+", label: "Tribal Partners", icon: "🤝" },
                { number: "1000+", label: "Happy Customers", icon: "😊" },
                { number: "11", label: "Product Categories", icon: "🛍️" }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="group p-8 rounded-2xl bg-background/80 backdrop-blur border border-border/40 hover:border-accent/60 hover:shadow-xl transition-all duration-500 text-center animate-in fade-in duration-700 hover:scale-105 hover:bg-primary/5"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Leaf, title: "100% Pure", desc: "Chemical-free, stone-pressed, in-house produced oils and foods" },
                { icon: Heart, title: "Tribal Empowerment", desc: "Direct partnerships with tribal communities to ensure fair trade and sustainable livelihoods" },
                { icon: Droplet, title: "Traditional Methods", desc: "Handcrafted products using time-honored techniques passed down through generations" },
                { icon: Users, title: "Community Care", desc: "Dedicated to elevating the lives of tribal communities and preserving cultural heritage" }
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={idx}
                    className="group relative p-8 rounded-2xl bg-background border border-border/40 hover:border-primary/60 hover:shadow-xl transition-all duration-500 text-center animate-in fade-in duration-500 overflow-hidden hover:scale-105"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Interactive Cards */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center animate-in fade-in duration-700">Why Choose Maa?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "🏭 In-House Production", desc: "All products are manufactured in-house with complete quality control and transparency" },
                  { title: "🚫 No Middlemen", desc: "Direct from tribal sources to your home—ensuring authenticity and fair pricing" },
                  { title: "✨ 100% Authentic", desc: "100% authentic products created by us, with no external brands or compromise on quality" },
                  { title: "❤️ Community Support", desc: "Every purchase directly supports tribal communities, helping lift families out of poverty" },
                  { title: "🎭 Heritage Preservation", desc: "Preserving ancient food traditions and production methods that have been refined over generations" },
                  { title: "🌿 Health & Wellness", desc: "Products created with health in mind, using only natural, chemical-free ingredients" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group p-6 rounded-2xl bg-background/80 backdrop-blur border border-border/40 hover:border-primary/60 transition-all duration-500 animate-in fade-in duration-500 hover:shadow-lg hover:scale-105"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform duration-500">
                          {item.title.split(' ')[0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.title.split(' ').slice(1).join(' ')}
                          </h3>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 relative overflow-hidden">
          {/* Animated decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Follow us on social media for updates, recipes, wellness tips, and exclusive offers
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
              <a href="https://www.youtube.com/@MaaTLStore_" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '0ms' }}>
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-border/40 group-hover:border-primary/80 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                  <Youtube className="h-10 w-10 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold">YouTube</span>
              </a>
              <a href="https://www.instagram.com/maatlstore/?hl=en" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '100ms' }}>
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-border/40 group-hover:border-primary/80 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                  <Instagram className="h-10 w-10 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold">Instagram</span>
              </a>
              <a href="https://www.facebook.com/maatlstore" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-border/40 group-hover:border-primary/80 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                  <Facebook className="h-10 w-10 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold">Facebook</span>
              </a>
              <a href="https://x.com/MaaTLStore" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-border/40 group-hover:border-primary/80 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                  <Twitter className="h-10 w-10 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold">Twitter/X</span>
              </a>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">Download our mobile app for the best shopping experience</p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.maatlstore&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95">
                  Google Play
                </a>
                <a href="https://apps.apple.com/app/maatlstore/id6458098461" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95">
                  Apple App Store
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Experience Authenticity</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join us in celebrating pure, traditional products that nourish your body and support tribal communities
            </p>
            <Button size="lg" className="h-12 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold shadow-lg" asChild>
              <Link href="/shop">
                Shop Our Collection
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
