import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    localStorage.removeItem('user');
    if (!phone) return setError('נא להזין מספר טלפון');

    try {
      const res = await api.get(`/users/by-phone/${phone}`);
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
        if (res.data.isAdmin) {
          navigate('/admin-dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('משתמש לא נמצא');
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError('מספר טלפון לא קיים במערכת');
      } else {
        setError('שגיאה בהתחברות');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300" dir="rtl">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-right"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">התחברות</h2>

        <input
          type="tel"
          placeholder="מספר טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          התחבר
        </button>

        <p className="mt-4 text-sm text-center">
          אין לך חשבון?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">להרשמה</Link>
        </p>
      </form>
    </div>
  );
}
