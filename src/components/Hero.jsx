import React from 'react';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Идеальный бизнес-ланч с доставкой
            <span className="block text-orange-600">соберите свой сет за минуту</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Супы, горячее, салаты, напитки и выпечка — в одном заказе. Быстро, свежо и по-оранжевому вкусно.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#menu" className="px-5 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">Собрать ланч</a>
            <a href="#about" className="px-5 py-3 bg-white border border-orange-200 text-orange-700 rounded-md hover:bg-orange-50 transition flex items-center gap-2">
              <Rocket size={18} /> Как это работает
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
            alt="Business lunch"
            className="rounded-xl shadow-2xl ring-1 ring-orange-100"
          />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow p-3 border border-orange-100">
            <span className="text-sm text-gray-600">Среднее время доставки</span>
            <div className="text-lg font-bold text-orange-600">35 мин</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
