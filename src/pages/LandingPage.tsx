import Features from "../components/page/Features";
import Footer from "../components/page/Footer";
import Header from "../components/page/Header";
import Hero from "../components/page/Hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary text-foreground">
      <Header />
      <Hero />
      <Features />

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ready to reclaim your time?</h2>
          <p className="text-primary-foreground/90 text-base sm:text-lg lg:text-xl mb-8">
            Stop spinning your wheels. Start focusing on what matters.
          </p>
          <button className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-base sm:text-lg">
            Get your first assignment done
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}