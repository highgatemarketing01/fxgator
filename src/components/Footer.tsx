import { TrendingUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <span className="text-xl font-bold text-white">FX Gator</span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-right">
            © 2025 FX Gator. All rights reserved. Trading involves risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
