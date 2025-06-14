import { useState, useEffect } from 'react';
import api from '../services/api';
import UserHistory from '../components/UserHistory';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  console.log('userId שנשלח:', userId);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      const res = await api.get('/categories');
      setCategories(res.data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchSubCategories() {
      if (selectedCategory) {
        const res = await api.get(`/subcategories/${selectedCategory}`);
        setSubCategories(res.data);
      }
    }
    fetchSubCategories();
  }, [selectedCategory]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // מוחק את המשתמש מה-localStorage
    window.location.href = '/'; // מעביר לעמוד הבית (או Login)
  };


  const sendPrompt = async () => {
    try {
      const res = await api.post('/prompts', {
        user_id: userId,
        category_id: selectedCategory,
        sub_category_id: selectedSubCategory,
        prompt: prompt
      });
      setResponse(res.data.response);
    } catch (err) {
      alert('שגיאה בשליחת שאלה');
    }
  };

  return (

    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg text-right" dir="rtl">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          התנתקות
        </button>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-blue-700">שאלי את הבינה המלאכותית</h2>

      <div className="space-y-4">
        <select
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">בחרי קטגוריה</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>

        <select
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setSelectedSubCategory(e.target.value)}
          value={selectedSubCategory}
        >
          <option value="">בחרי תת-קטגוריה</option>
          {subCategories.map(sc => <option key={sc.id} value={sc.id}>{sc.name}</option>)}
        </select>

        <textarea
          className="w-full h-32 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="כתבי את השאלה שלך כאן..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />

        <button
          onClick={sendPrompt}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          שלחי
        </button>
      </div>

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-300">
          <strong className="text-blue-600">תשובת AI:</strong>
          <p className="mt-2">{response}</p>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">ברוכה הבאה 👋</h2>
        <UserHistory userId={userId} />
      </div>
    </div>
  );
}
