import { MapPin, Phone, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-secondary/40 border-t border-border/40 py-12 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-300">Maa Store</h3>
            <p className="text-sm text-muted-foreground">
              Premium cold-pressed oils, organic dhals, millets, ghee, honey, and traditional batters from Hyderabad, India. Everything naturally sourced.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Cold-Pressed Oils</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Dhals & Pulses</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Millets</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Ghee & Butter</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Honey & Batters</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Our Process</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Contact</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-foreground">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-9 rounded-lg border border-input bg-background/50 px-3 py-1 text-sm shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-background hover:border-primary/30"
              />
              <button className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-lg inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Location Section with Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 py-8 border-t border-border/40">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Visit Us</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  3-1-138/C, AOC Main Rd, opp. Aoc Gate, Santoshi Nagar Colony, Simhapuri Colony, West Marredpally, Secunderabad, Telangana 500026, India
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+918340000987" className="hover:text-primary transition-colors duration-300">
                    +91 83400 00987
                  </a>
                </div>
                <a 
                  href="https://maps.app.goo.gl/tUVo7RsC17PrZFYx6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-border/40 shadow-md hover:shadow-lg transition-all duration-300 h-64 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3158849374286!2d78.50585609999999!3d17.4564494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b41a7b571d9%3A0x1d0f30a9dc598870!2sMaa%20Traditional%20Lifestyle%20Store%20Cold%20Pressed%20Oil%20-%20Secunderabad!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '250px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-8 py-8 border-t border-border/40">
          <a href="https://www.youtube.com/@MaaTLStore_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/maatlstore/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/maatlstore" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://x.com/MaaTLStore" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Twitter/X">
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-6">
          <p className="mb-3">Download our mobile app for exclusive deals!</p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.maatlstore&pli=1" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary transition-colors duration-300">
              Google Play
            </a>
            <span className="text-border/40">•</span>
            <a href="https://apps.apple.com/app/maatlstore/id6458098461" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary transition-colors duration-300">
              Apple App Store
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Maa Store. All rights reserved. Located in Secunderabad, Hyderabad, India. 🌾
        </div>
      </div>
    </footer>
  );
}