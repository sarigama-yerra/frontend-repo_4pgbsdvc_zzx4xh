import React from 'react';
import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';

export default function Cart({ items = [], onChangeQty, onRemove, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Ваша корзина</h1>
      {items.length === 0 ? (
        <div className="rounded-2xl border bg-white/70 backdrop-blur p-8 text-center text-zinc-600">
          Корзина пуста. Добавьте блюда с главной страницы.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl border bg-white/70 backdrop-blur p-4">
                <img src={item.image} alt={item.name} className="h-20 w-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button onClick={() => onRemove?.(item.id)} className="p-2 rounded-lg hover:bg-zinc-100">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-zinc-600 line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button onClick={() => onChangeQty?.(item.id, Math.max(1, item.qty - 1))} className="p-2 rounded-lg border bg-white">
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 rounded-lg bg-zinc-100">{item.qty}</span>
                      <button onClick={() => onChangeQty?.(item.id, item.qty + 1)} className="p-2 rounded-lg border bg-white">
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="font-semibold">{item.price * item.qty} ₽</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-600">Итого</span>
                <span className="text-xl font-bold">{total} ₽</span>
              </div>
              <button onClick={onCheckout} className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 text-white">
                <CreditCard size={18} /> Оформить заказ
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
