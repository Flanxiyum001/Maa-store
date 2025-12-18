import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-primary">Cancellation Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated on 12/08/2023</p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MAA TRADITIONAL LIFESTYLE STORE believes in helping its customers as far as possible and has therefore a liberal cancellation policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Cancellation Guidelines</h2>
                <ul className="space-y-4 ml-6">
                  <li className="text-muted-foreground">
                    <strong>Timing:</strong> Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                  </li>
                  <li className="text-muted-foreground">
                    <strong>Perishable Items:</strong> MAA TRADITIONAL LIFESTYLE STORE does not accept cancellation requests for perishable items like flowers, eatables, oils, etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Damaged or Defective Items</h2>
                <p className="text-muted-foreground mb-4">
                  In case of receipt of damaged or defective items please report the same to our Customer Service team via WhatsApp at +91 83400 00987.
                </p>
                <p className="text-muted-foreground">
                  <strong>Important:</strong> The request will be entertained once the merchant has checked and determined the same at their own end. This should be reported within 7 days of receipt of the products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Product Quality Complaints</h2>
                <p className="text-muted-foreground mb-4">
                  In case you feel that the product received is not as it should be and has a valid reason of its variance in general or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product.
                </p>
                <p className="text-muted-foreground">
                  The Customer Service Team, after looking into your complaint, will take an appropriate decision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Manufacturer Warranty</h2>
                <p className="text-muted-foreground">
                  In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Refund Processing</h2>
                <p className="text-muted-foreground mb-4">
                  In case of any Refunds approved by MAA TRADITIONAL LIFESTYLE STORE, it'll take 1-2 business days for the refund to be processed to the end customer.
                </p>
                <p className="text-muted-foreground">
                  <strong>Contact:</strong> All cancellation and refund requests should be addressed to us via WhatsApp at +91 83400 00987 with a clear description of your request.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border/40">
                <p className="text-sm text-muted-foreground text-center">
                  For any questions about our Cancellation Policy, please contact us on WhatsApp: +91 83400 00987
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
