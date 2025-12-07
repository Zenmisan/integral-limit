import { ArrowRight, Zap, BookOpen, Code2, Clock } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">integral</div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#benefits" className="hover:text-orange-600 transition">Why us</a>
            <a href="#how-it-works" className="hover:text-orange-600 transition">How it works</a>
            <a href="#" className="hover:text-orange-600 transition">Pricing</a>
          </nav>
          <button className="px-6 py-2 bg-orange-600 text-white rounded text-sm font-medium hover:bg-orange-700 transition">
            Get started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your assignments,<br />
            <span className="text-orange-600">done right.</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
            Stop spending hours on maths and computer science assignments. Let us handle them while you focus on what truly matters—building your business or deepening your knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="px-8 py-3 bg-orange-600 text-white rounded font-medium hover:bg-orange-700 transition flex items-center gap-2 whitespace-nowrap">
              Submit assignment <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded font-medium hover:border-orange-600 transition">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Weird Column Display with Benefits */}
      <section id="benefits" className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Why choose Integral Limit?</h2>
          <p className="text-gray-600 mb-16">Built for people who value their time.</p>

          {/* 3-column layout with offset positioning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="space-y-8">
              <div className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Fast turnaround</h3>
                <p className="text-gray-600 text-sm lg:text-base">Get your assignments completed in days, not weeks. No delays, no excuses.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Expert solutions</h3>
                <p className="text-gray-600 text-sm lg:text-base">Our team specializes in maths and CS. Every solution is verified and battle-tested.</p>
              </div>
            </div>

            {/* Column 2 - offset and different styling */}
            <div className="space-y-8 md:translate-y-12">
              <div className="pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Reclaim your time</h3>
                <p className="text-gray-600 text-sm lg:text-base">Stop wasting hours on repetitive assignments. Spend those hours building or learning what you're passionate about.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Transparent process</h3>
                <p className="text-gray-600 text-sm lg:text-base">Real-time updates and clear communication. You always know where your project stands.</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Entrepreneur's edge</h3>
                <p className="text-gray-600 text-sm lg:text-base">More working hours. More client time. More growth. While others are stuck on homework, you're building.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm lg:text-base italic">
                  "For entrepreneurs, it's not about cutting corners—it's about focusing on what generates value. Your time is your most expensive resource."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-6">1</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Submit</h3>
              <p className="text-gray-600 text-sm lg:text-base">Upload your assignment details, requirements, and deadline. We review everything carefully.</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-6">2</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Get assigned</h3>
              <p className="text-gray-600 text-sm lg:text-base">We match your project with an expert in maths or computer science who specializes in your field.</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-6">3</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Receive & review</h3>
              <p className="text-gray-600 text-sm lg:text-base">Get your completed assignment with clear explanations. Ask for revisions if needed—we deliver until it's perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student vs Entrepreneur CTA */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 lg:p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">For students</h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                More time to understand the concepts that matter. Get your assignments done while you focus on the courses you love and the skills that define you.
              </p>
              <ul className="space-y-3 text-sm lg:text-base">
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>More time for deep reading</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Learn from expert solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Reduce stress during exam season</span>
                </li>
              </ul>
            </div>
            <div className="p-6 lg:p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">For entrepreneurs</h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                Keep up with your degree while scaling your business. No late nights torn between code and coursework.
              </p>
              <ul className="space-y-3 text-sm lg:text-base">
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>More hours to dedicate to your company</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Stay on track with your degree</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>No more trade-offs between growth and grades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to reclaim your time?</h2>
          <p className="text-gray-600 text-base lg:text-lg mb-8">
            Stop spinning your wheels. Start focusing on what matters.
          </p>
          <button className="px-8 py-4 bg-orange-600 text-white rounded font-medium hover:bg-orange-700 transition text-base lg:text-lg">
            Get your first assignment done
          </button>
        </div>
      </section>

      {/* Footer - minimal */}
      <footer className="bg-gray-900 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold">integral</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
