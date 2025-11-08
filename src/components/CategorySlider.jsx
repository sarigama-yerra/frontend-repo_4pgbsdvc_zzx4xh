import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function CategorySlider({ title, items = [], onAdd }) {
  const ref = useRef(null);
  const scrollBy = (dir) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-8">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-900">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scrollBy(-1)} className="p-2 rounded-lg border bg-white hover:bg-zinc-50"><ChevronLeft size={18} /></button>
          <button onClick={() => scrollBy(1)} className="p-2 rounded-lg border bg-white hover:bg-zinc-50"><ChevronRight size={18} /></button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none"
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="min-w-[280px] max-w-[280px] snap-start rounded-2xl border bg-white/80 backdrop-blur hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 truncate">{item.name}</h3>
                <span className="text-zinc-900 font-semibold">{item.price} ₽</span>
              </div>
              <p className="text-sm text-zinc-600 line-clamp-2">{item.description}</p>
              <button
                onClick={() => onAdd?.(item)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-white hover:translate-y-0.5 transition-transform"
              >
                <Plus size={16} /> В корзину
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
