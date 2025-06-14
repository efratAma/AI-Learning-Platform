import { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';


export default function Register() {
  useEffect(() => {
    localStorage.removeItem('user');
  }, []);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone } = form;

    if (!name || !phone) {
      setError('נא למלא את כל השדות');
      return;
    }

    try {
      const res = await api.post('/users', { name, phone });
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.error || 'שגיאה ברישום';
      setError(msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300" dir="rtl">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-right"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">הרשמה</h2>

        <input
          name="name"
          placeholder="שם"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          name="phone"
          placeholder="טלפון"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          הרשמה
        </button>

        <p className="mt-4 text-sm text-center">
          כבר יש לך חשבון?{' '}
          <Link to="/" className="text-green-600 hover:underline">להתחברות</Link>
        </p>
      </form>
    </div>
  );
}
