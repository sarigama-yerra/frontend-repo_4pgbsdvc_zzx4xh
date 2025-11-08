import React from 'react';

const emptyItem = { id: '', name: '', description: '', price: 0, image: '', category: 'Супы' };

const AdminPanel = ({ items, onSave, onDelete }) => {
  const [form, setForm] = React.useState(emptyItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    const item = { ...form, id: form.id || `${Date.now()}` };
    onSave(item);
    setForm(emptyItem);
  };

  const startEdit = (it) => setForm(it);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Админ-панель</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-orange-100 shadow-sm p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded-md px-3 py-2 col-span-2" placeholder="Название" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
            <input className="border rounded-md px-3 py-2" placeholder="Цена" type="number" value={form.price} onChange={(e)=>setForm({...form,price:Number(e.target.value)})} />
            <select className="border rounded-md px-3 py-2" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}>
              <option>Супы</option>
              <option>Горячее</option>
              <option>Салаты</option>
              <option>Напитки</option>
              <option>Выпечка</option>
            </select>
            <input className="border rounded-md px-3 py-2 col-span-2" placeholder="URL изображения" value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})} />
            <textarea className="border rounded-md px-3 py-2 col-span-2" placeholder="Описание" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Сохранить</button>
            {form.id && (
              <button type="button" onClick={()=>setForm(emptyItem)} className="px-4 py-2 border rounded-md">Сброс</button>
            )}
          </div>
        </form>

        <div className="bg-white rounded-xl border border-orange-100 shadow-sm">
          <div className="p-4 font-semibold">Меню</div>
          <ul className="divide-y">
            {items.map((it)=> (
              <li key={it.id} className="p-4 flex items-center gap-4">
                <img src={it.image} alt={it.name} className="w-16 h-16 object-cover rounded-md border" />
                <div className="flex-1">
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-sm text-gray-600">{it.category} • {it.price} ₽</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border rounded-md" onClick={()=>startEdit(it)}>Редактировать</button>
                  <button className="px-3 py-1 border rounded-md text-red-600" onClick={()=>onDelete(it.id)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
