# AI Learning Platform

Mini MVP – פרויקט פלטפורמת למידה מבוססת AI  
**מפתחת:** אפרת עמא  
**GitHub:** [AI-Learning-Platform](https://github.com/efratAma/AI-Learning-Platform.git)

---

## 🎯 תיאור כללי

פלטפורמת למידה אינטראקטיבית המאפשרת למשתמשים לבחור נושא לימוד (קטגוריה ותת-קטגוריה), לשלוח שאלה (prompt) ולקבל תשובה לימודית מגנרטור AI (באמצעות OpenAI).  
המערכת כוללת גם היסטוריית למידה לכל משתמש, אפשרות להתנתק וממשק ניהול עבור אדמין.

---

## 🧱 טכנולוגיות

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Docker

### Frontend
- React

### AI
- OpenAI GPT API

---

## 🧪 פיצ'רים עיקריים

- רישום משתמשים חדשים  
- התחברות / **התנתקות**  
- שליחת שאלות וקבלת תשובות מה-AI  
- צפייה בהיסטוריית למידה  
- ממשק ניהול:
  - מציג את רשימת כל המשתמשים
  - מציג את היסטוריית הלמידה של כל משתמש  
- זיהוי משתמש **אדמין לפי מספר טלפון:** `0583250371`

---

## 🚀 הרצה מקומית

### דרישות מוקדמות
- Docker מותקן
- Node.js ו-NPM מותקנים

### הפעלת המערכת:

```bash
git clone https://github.com/efratAma/AI-Learning-Platform.git
cd AI-Learning-Platform

## 🚀 הרצה מקומית

### 1. הגדרת משתני סביבה

צרו קובץ בשם `.env` בתיקיית `backend` עם התוכן הבא:

```env
PORT=5000
DB_HOST=learning-db
DB_USER=postgres
DB_PASSWORD=Ea0583250371
DB_NAME=ai_learning
DB_PORT=5432
ADMIN_PHONE=0583250371
OPENAI_API_KEY=sk-...
