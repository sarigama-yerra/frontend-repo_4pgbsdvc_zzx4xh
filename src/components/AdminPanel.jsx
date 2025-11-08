import React from 'react';
import { Save, Trash2, PencilLine, Image as ImageIcon } from 'lucide-react';

const emptyForm = { id: '', name: '', category: 'Супы', price: '', image: '', description: '' };

export default function AdminPanel({ items = [], onSave, onDelete }) {
  const [form, setForm] = React.useState(emptyForm);

  const submit = (e) => {
    e.preventDefault();
    if (!form.id) form.id = Math.random().toString(36).slice(2, 9);
    onSave?.({ ...form, price: Number(form.price) });
    setForm(emptyForm);
  };

  const edit = (item) => setForm({ ...item, price: String(item.price) });

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Админка меню</h1>

      <form onSubmit={submit} className="rounded-2xl border bg-white/70 backdrop-blur p-5 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-zinc-600">Название</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border px-3 py-2 bg-white" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-600">Категория</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full rounded-xl border px-3 py-2 bg-white">
              <option>Супы</option>
              <option>Горячее</option>
              <option>Салаты</option>
              <option>Напитки</option>
              <option>Выпечка</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-600">Цена</label>
            <input type="number" min="0" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full rounded-xl border px-3 py-2 bg-white" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-600">URL изображения</label>
            <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full rounded-xl border px-3 py-2 bg-white" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm text-zinc-600">Описание</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-xl border px-3 py-2 bg-white" rows={3} />
          </div>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white"><Save size={16} /> Сохранить</button>
      </form>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border bg-white/70 backdrop-blur overflow-hidden">
            {item.image ? (
              <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            ) : (
              <div className="h-40 w-full grid place-items-center text-zinc-400"><ImageIcon /></div>
            )}
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="font-semibold">{item.price} ₽</span>
              </div>
              <p className="text-sm text-zinc-600 line-clamp-2">{item.description}</p>
              <div className="flex gap-2">
                <button onClick={() => edit(item)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border"><PencilLine size={16} /> Редактировать</button>
                <button onClick={() => onDelete?.(item.id)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-red-600"><Trash2 size={16} /> Удалить</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
