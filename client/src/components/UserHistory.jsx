import { useEffect, useState } from 'react';
import api from '../services/api';

export default function UserHistory({ userId }) {
  console.log('userId שהתקבל:', userId);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!userId) return;
    async function fetchHistory() {
      try {
        const res = await api.get(`/users/${userId}/history`);
        setHistory(res.data);
      } catch (err) {
        alert('שגיאה בטעינת היסטוריה');
      }
    }

    fetchHistory();
  }, [userId]);

  return (
    <div>
      <h3>היסטוריית למידה</h3>
      {history.length === 0 ? (
        <p>אין היסטוריה להצגה</p>
      ) : (
        <ul>
          {history.map((item, i) => (
            <li key={i} style={{ marginBottom: '15px' }}>
              <strong>שאלה:</strong> {item.prompt}<br />
              <strong>תשובה:</strong> {item.response}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
