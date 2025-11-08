import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[20%] bg-[conic-gradient(at_10%_10%,#ffedd5_0deg,#f97316_120deg,#f43f5e_240deg,#ffedd5_360deg)] opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow text-sm">
              <Rocket size={16} className="text-orange-600" />
              <span className="text-zinc-700">Собери свой идеальный бизнес-ланч</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
              Быстро. Вкусно. Современно.
            </h1>
            <p className="text-lg text-zinc-600">
              FlameLunch — это стильная доставка обедов с акцентом на свежесть, скорость и удобство. Выбирайте блюда, управляйте корзиной и оформляйте заказ за минуты.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white hover:translate-y-0.5 transition-transform"
              >
                Начать выбор
                <ArrowRight size={18} />
              </button>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50"
              >
                Посмотреть меню
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-gradient-to-br from-orange-200 via-pink-200 to-amber-200">
              <img
                className="w-full h-full object-cover mix-blend-multiply"
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
                alt="Modern lunch selection"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
