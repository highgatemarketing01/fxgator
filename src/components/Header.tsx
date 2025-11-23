export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/FX GATOR logo only.png" alt="FX Gator Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">FX Gator</span>
          </div>
          <nav className="hidden md:block">
            <span className="text-gray-400 text-sm">Your Path to Trading Success</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
