import Features from "../components/page/Features";
import Footer from "../components/page/Footer";
import Header from "../components/page/Header";
import Hero from "../components/page/Hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <Header />
      <Hero />
      <Features />
      {/* Final CTA */}
      <section className="py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to reclaim your time?</h2>
          <p className="text-gray-600 text-base lg:text-lg mb-8">
            Stop spinning your wheels. Start focusing on what matters.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded font-medium hover:bg-primary/90 transition text-base lg:text-lg">
            Get your first assignment done
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}