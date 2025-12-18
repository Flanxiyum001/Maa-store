import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-primary">Shipping Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated on 12/08/2023</p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Current Shipping Area (2023)</h2>
                <p className="text-muted-foreground">
                  For the year 2023, MAA TRADITIONAL LIFESTYLE STORE will be serving or shipping only to an area of 10 km around Secunderabad, Hyderabad, Telangana, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">International & Domestic Shipping</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>For International Buyers:</strong> Orders are shipped and delivered through registered international courier companies and/or international speed post only.
                </p>
                <p className="text-muted-foreground">
                  <strong>For Domestic Buyers:</strong> Orders are shipped through registered domestic courier companies and/or speed post only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Local Delivery (Within Hyderabad)</h2>
                <p className="text-muted-foreground mb-4">
                  For orders within 10 km of Hyderabad, delivery app will be used.
                </p>
                <div className="space-y-3 ml-6">
                  <div className="text-muted-foreground">
                    <strong>Free Delivery Zones:</strong>
                    <ul className="space-y-2 mt-2 ml-4">
                      <li>• Orders above Rs. 2000 - Free delivery within 5 km radius</li>
                      <li>• Orders above Rs. 2500 - Free delivery within 8 km radius</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Delivery Timeline</h2>
                <p className="text-muted-foreground mb-4">
                  Orders are shipped within 0-2 days or as per the delivery date agreed at the time of order confirmation and delivery of the shipment subject to Courier Company / post office norms.
                </p>
                <p className="text-muted-foreground">
                  <strong>Note:</strong> MAA TRADITIONAL LIFESTYLE STORE is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-2 days from the date of the order and payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Delivery Address</h2>
                <p className="text-muted-foreground">
                  Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your email ID or WhatsApp number as specified during registration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Need Help?</h2>
                <p className="text-muted-foreground">
                  For any issues in utilizing our services, you may contact our helpdesk via WhatsApp at +91 83400 00987.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border/40">
                <p className="text-sm text-muted-foreground text-center">
                  For any questions about our Shipping Policy, please contact us on WhatsApp: +91 83400 00987
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
