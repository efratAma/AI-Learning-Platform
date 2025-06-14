import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('http://localhost:5000/admin/users-history');
        setUsers(res.data);
      } catch (err) {
        alert('שגיאה בטעינת מידע');
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg text-right" dir="rtl">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">לוח ניהול - היסטוריית למידה</h2>

      {users.map(user => (
        <div key={user.id} className="mb-8 border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">
            {user.name} <span className="text-sm text-gray-600">({user.phone})</span>
          </h3>

          {user.prompts.length === 0 ? (
            <p className="text-gray-500">אין היסטוריה</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-right border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-3 border">#</th>
                    <th className="p-3 border">שאלה</th>
                    <th className="p-3 border">תשובה</th>
                    <th className="p-3 border">תאריך</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {user.prompts.map((prompt, i) => (
                    <tr key={i} className="hover:bg-blue-50">
                      <td className="p-3 border text-center">{i + 1}</td>
                      <td className="p-3 border">{prompt.prompt}</td>
                      <td className="p-3 border">{prompt.response}</td>
                      <td className="p-3 border">{new Date(prompt.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
