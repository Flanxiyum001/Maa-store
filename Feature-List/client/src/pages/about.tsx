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

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
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
                    className="p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-center animate-in fade-in duration-500"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Maa Traditional Lifestyle Store?</h2>
              
              <div className="space-y-6">
                {[
                  { title: "In-House Production", desc: "All products are manufactured in-house with complete quality control and transparency" },
                  { title: "No Middlemen", desc: "Direct from tribal sources to your home—ensuring authenticity and fair pricing" },
                  { title: "No Branded Products", desc: "100% authentic products created by us, with no external brands or compromise on quality" },
                  { title: "Tribal Community Support", desc: "Every purchase directly supports tribal communities, helping lift families out of poverty" },
                  { title: "Traditional Heritage", desc: "Preserving ancient food traditions and production methods that have been refined over generations" },
                  { title: "Health & Wellness", desc: "Products created with health in mind, using only natural, chemical-free ingredients" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 animate-in fade-in duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow us on social media for updates, recipes, wellness tips, and exclusive offers
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 mb-12">
              <a href="https://www.youtube.com/@MaaTLStore_" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '0ms' }}>
                <div className="h-16 w-16 rounded-full bg-background border-2 border-border/40 group-hover:border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                  <Youtube className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </a>
              <a href="https://www.instagram.com/maatlstore/?hl=en" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '100ms' }}>
                <div className="h-16 w-16 rounded-full bg-background border-2 border-border/40 group-hover:border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                  <Instagram className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a href="https://www.facebook.com/maatlstore" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
                <div className="h-16 w-16 rounded-full bg-background border-2 border-border/40 group-hover:border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                  <Facebook className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a href="https://x.com/MaaTLStore" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:text-primary transition-colors duration-300 animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
                <div className="h-16 w-16 rounded-full bg-background border-2 border-border/40 group-hover:border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                  <Twitter className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">Twitter/X</span>
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
