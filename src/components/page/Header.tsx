import IntegralLimitLogo from '../../assets/integral-limit-logo.png';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white text-gray-900 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <a href="#" className="pl-4 pr-4">
              <img src={IntegralLimitLogo} alt="Integral Limit Logo" className="h-16 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#benefits" className="px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white transition">Why us</a>
            <a href="#how-it-works" className="px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white transition">How it works</a>
            <a href="#" className="px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white transition">Pricing</a>
            <button className="px-6 py-2 bg-primary text-white rounded text-base font-medium hover:bg-secondary transition">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}