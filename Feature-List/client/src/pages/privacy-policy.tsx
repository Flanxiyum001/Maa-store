import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-primary">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated on 12/08/2023</p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This privacy policy sets out how <strong>MAA TRADITIONAL LIFESTYLE STORE</strong> uses and protects any information that you give MAA TRADITIONAL LIFESTYLE STORE when you use this website.
                </p>
              </section>

              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MAA TRADITIONAL LIFESTYLE STORE is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
                </p>
              </section>

              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MAA TRADITIONAL LIFESTYLE STORE may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">We may collect the following information:</h2>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">• Name, Gender, Date Of Birth and job title</li>
                  <li className="text-muted-foreground">• Contact information including email address</li>
                  <li className="text-muted-foreground">• Demographic information such as postcode, preferences and interests</li>
                  <li className="text-muted-foreground">• Other information relevant to customer surveys and/or offers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">What we do with the information we gather</h2>
                <p className="text-muted-foreground mb-4">
                  We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">• Internal record keeping.</li>
                  <li className="text-muted-foreground">• We may use the information to improve our products and services.</li>
                  <li className="text-muted-foreground">• We may contact you via WhatsApp for updates, special offers or other information which we think you may find interesting.</li>
                  <li className="text-muted-foreground">• From time to time, we may also use your information to contact you for market research purposes. We may contact you by WhatsApp, phone, or mail. We may use the information to customise the website according to your interests.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Security</h2>
                <p className="text-muted-foreground">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">How we use cookies</h2>
                <p className="text-muted-foreground mb-4">
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyses web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                </p>
                <p className="text-muted-foreground mb-4">
                  We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                </p>
                <p className="text-muted-foreground mb-4">
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                </p>
                <p className="text-muted-foreground">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Controlling your personal information</h2>
                <p className="text-muted-foreground mb-4">
                  You may choose to restrict the collection or use of your personal information in the following ways:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">• Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                  <li className="text-muted-foreground">• If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us via WhatsApp at +91 83400 00987</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Corrections to Your Information</h2>
                <p className="text-muted-foreground">
                  If you believe that any information we are holding on you is incorrect or incomplete, please contact us via WhatsApp at +91 83400 00987 as soon as possible. We will promptly correct any information found to be incorrect.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border/40">
                <p className="text-sm text-muted-foreground text-center">
                  For any questions about this privacy policy, please reach out to us on WhatsApp: +91 83400 00987
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
