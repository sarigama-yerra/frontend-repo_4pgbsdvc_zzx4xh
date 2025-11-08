import React from 'react';

const Cart = ({ items, onChangeQty, onRemove, onCheckout }) => {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Ваш заказ</h2>
      {items.length === 0 ? (
        <div className="text-gray-600">Корзина пуста. Добавьте блюда из меню.</div>
      ) : (
        <div className="bg-white rounded-xl border border-orange-100 shadow-sm overflow-hidden">
          <ul className="divide-y">
            {items.map((it) => (
              <li key={it.id} className="p-4 grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
                <div>
                  <div className="font-semibold text-gray-900">{it.name}</div>
                  <div className="text-sm text-gray-600">{it.price} ₽</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border rounded-md" onClick={() => onChangeQty(it.id, Math.max(1, it.qty - 1))}>-</button>
                  <span className="w-8 text-center">{it.qty}</span>
                  <button className="px-2 py-1 border rounded-md" onClick={() => onChangeQty(it.id, it.qty + 1)}>+</button>
                </div>
                <div className="font-semibold">{(it.price * it.qty).toFixed(0)} ₽</div>
                <button className="text-red-600 hover:underline" onClick={() => onRemove(it.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <div className="p-4 flex items-center justify-between bg-orange-50">
            <div className="text-lg font-bold text-orange-700">Итого: {total.toFixed(0)} ₽</div>
          </div>
          <div className="p-4 grid md:grid-cols-2 gap-4">
            <input className="w-full border rounded-md px-3 py-2" placeholder="Адрес доставки" />
            <input className="w-full border rounded-md px-3 py-2" placeholder="Телефон" />
            <textarea className="md:col-span-2 w-full border rounded-md px-3 py-2" placeholder="Комментарий к заказу" />
            <button onClick={onCheckout} className="md:col-span-2 w-full px-4 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700">Оформить заказ</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
