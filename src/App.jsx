import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySlider from './components/CategorySlider';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';

const initialMenu = [
  // Супы
  { id: 's1', name: 'Том Ям', category: 'Супы', price: 390, image: 'https://images.unsplash.com/photo-1645111689378-1974f43c0e1b?q=80&w=1600&auto=format&fit=crop', description: 'Острый тайский суп с креветками и кокосовым молоком.' },
  { id: 's2', name: 'Крем-суп из тыквы', category: 'Супы', price: 290, image: 'https://images.unsplash.com/photo-1505575972945-338c3fdde642?q=80&w=1600&auto=format&fit=crop', description: 'Нежный крем-суп с тыквой и сливками.' },
  { id: 's3', name: 'Борщ', category: 'Супы', price: 310, image: 'https://images.unsplash.com/photo-1572552638745-9b66b683e86a?q=80&w=1600&auto=format&fit=crop', description: 'Классический борщ со сметаной и зеленью.' },
  // Горячее
  { id: 'm1', name: 'Куриное филе гриль', category: 'Горячее', price: 450, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop', description: 'Сочное филе с пряными травами и гарниром.' },
  { id: 'm2', name: 'Паста с лососем', category: 'Горячее', price: 520, image: 'https://images.unsplash.com/photo-1526312426976-593c2ebc564b?q=80&w=1600&auto=format&fit=crop', description: 'Сливочная паста фетуччине со слабосолёным лососем.' },
  // Салаты
  { id: 'sa1', name: 'Цезарь с курицей', category: 'Салаты', price: 350, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop', description: 'Хрустящий салат с пармезаном и соусом цезарь.' },
  { id: 'sa2', name: 'Греческий салат', category: 'Салаты', price: 320, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop', description: 'Овощной салат с фетой и оливками.' },
  // Напитки
  { id: 'd1', name: 'Апельсиновый фреш', category: 'Напитки', price: 190, image: 'https://images.unsplash.com/photo-1645120091968-5f24af8eaff5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOUYlRDAlQjAlRDElODElRDElODIlRDAlQjAlMjAlRDElODElMjAlRDAlQkIlRDAlQkUlRDElODElRDAlQkUlRDElODElRDAlQjUlRDAlQkN8ZW58MHwwfHx8MTc2MjYxOTI2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Свежевыжатый апельсиновый сок.' },
  { id: 'd2', name: 'Лимонад домашний', category: 'Напитки', price: 160, image: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=1600&auto=format&fit=crop', description: 'Освежающий лимонад с мятой.' },
  // Выпечка
  { id: 'b1', name: 'Круассан', category: 'Выпечка', price: 140, image: 'https://images.unsplash.com/photo-1751112625480-490073cbf10e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOTMlRDElODAlRDAlQjUlRDElODclRDAlQjUlRDElODElRDAlQkElRDAlQjglRDAlQjklMjAlRDElODElRDAlQjAlRDAlQkIlRDAlQjAlRDElODJ8ZW58MHwwfHx8MTc2MjYxOTI2OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Слоёный французский круассан.' },
  { id: 'b2', name: 'Чизкейк Нью-Йорк', category: 'Выпечка', price: 260, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop', description: 'Классический нежный чизкейк.' },
];

function App() {
  const [page, setPage] = React.useState('home'); // 'home' | 'cart' | 'admin'
  const [menu, setMenu] = React.useState(initialMenu);
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((p) => p.id === item.id);
      if (ex) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const changeQty = (id, qty) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const onCheckout = () => {
    alert('Спасибо! Заказ оформлен. В реальной версии добавим оплату и трекинг.');
    setCart([]);
    setPage('home');
  };

  const saveMenuItem = (item) => {
    setMenu((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      return exists ? prev.map((p) => (p.id === item.id ? item : p)) : [item, ...prev];
    });
  };
  const deleteMenuItem = (id) => setMenu((prev) => prev.filter((p) => p.id !== id));

  const byCategory = (cat) => menu.filter((m) => m.category === cat);

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <Navbar onNavigate={setPage} cartCount={cart.reduce((s, i) => s + i.qty, 0)} current={page} />

      {page === 'home' && (
        <main>
          <Hero />
          <div className="max-w-6xl mx-auto px-4">
            <CategorySlider title="Супы" items={byCategory('Супы')} onAdd={addToCart} />
            <CategorySlider title="Горячие блюда" items={byCategory('Горячее')} onAdd={addToCart} />
            <CategorySlider title="Салаты" items={byCategory('Салаты')} onAdd={addToCart} />
            <CategorySlider title="Напитки" items={byCategory('Напитки')} onAdd={addToCart} />
            <CategorySlider title="Выпечка" items={byCategory('Выпечка')} onAdd={addToCart} />
          </div>
          <footer className="mt-12 border-t border-orange-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
              <span>© {new Date().getFullYear()} FlameLunch — доставка бизнес-ланчей</span>
              <button onClick={() => setPage('cart')} className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Перейти в корзину</button>
            </div>
          </footer>
        </main>
      )}

      {page === 'cart' && (
        <Cart items={cart} onChangeQty={changeQty} onRemove={removeFromCart} onCheckout={onCheckout} />
      )}

      {page === 'admin' && (
        <AdminPanel items={menu} onSave={saveMenuItem} onDelete={deleteMenuItem} />
      )}
    </div>
  );
}

export default App;
