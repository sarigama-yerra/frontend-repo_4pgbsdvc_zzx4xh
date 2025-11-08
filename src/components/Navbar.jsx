import React from 'react';
import { ShoppingCart, Home, Sparkles } from 'lucide-react';

export default function Navbar({ onNavigate, cartCount = 0, current = 'home' }) {
  return (
    <div className="sticky top-0 z-50">
      <nav className="mx-4 mt-4 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight"
            aria-label="Go to home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">
              <Sparkles size={18} />
            </span>
            <span className="text-lg">FlameLunch</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate?.('home')}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                current === 'home'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-900/5 dark:hover:bg-white/5'
              }`}
            >
              <Home size={18} />
              <span>Главная</span>
            </button>
            <button
              onClick={() => onNavigate?.('cart')}
              className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                current === 'cart'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-900/5 dark:hover:bg-white/5'
              }`}
            >
              <ShoppingCart size={18} />
              <span>Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
