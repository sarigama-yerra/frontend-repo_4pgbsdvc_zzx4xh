import React from 'react';
import { ShoppingCart, Home, Shield } from 'lucide-react';

const Navbar = ({ onNavigate, cartCount, current }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-orange-600 font-extrabold text-xl"
        >
          <span className="inline-block w-8 h-8 rounded-full bg-orange-500 text-white grid place-items-center">🍲</span>
          FlameLunch
        </button>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1 px-3 py-2 rounded-md hover:bg-orange-50 transition text-sm ${current==='home' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}
          >
            <Home size={18} />
            Главная
          </button>
          <button
            onClick={() => onNavigate('admin')}
            className={`flex items-center gap-1 px-3 py-2 rounded-md hover:bg-orange-50 transition text-sm ${current==='admin' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}
          >
            <Shield size={18} />
            Админка
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="relative flex items-center gap-2 px-3 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition"
          >
            <ShoppingCart size={18} />
            Корзина
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-white text-orange-600 border border-orange-600 rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
