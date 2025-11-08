import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategorySlider = ({ title, items, onAdd }) => {
  const scrollerRef = React.useRef(null);

  const scrollBy = (delta) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="my-8" id="menu">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <button onClick={() => scrollBy(-300)} className="p-2 rounded-md border bg-white hover:bg-orange-50 text-gray-700">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollBy(300)} className="p-2 rounded-md border bg-white hover:bg-orange-50 text-gray-700">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {items.map((item) => (
          <div key={item.id} className="min-w-[240px] snap-start bg-white rounded-xl border border-orange-100 shadow-sm overflow-hidden">
            <img src={item.image} alt={item.name} className="h-36 w-full object-cover" />
            <div className="p-3">
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-600 line-clamp-2">{item.description}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-orange-600 font-bold">{item.price} ₽</span>
                <button onClick={() => onAdd(item)} className="px-3 py-1.5 bg-orange-600 text-white rounded-md hover:bg-orange-700 text-sm">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
