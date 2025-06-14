
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

git clone https://github.com/efratAma/AI-Learning-Platform.git
cd AI-Learning-Platform

## 🚀 הרצה מקומית

### 1. הגדרת משתני סביבה

צרו קובץ בשם `.env` בתיקיית `backend` עם התוכן הבא:


PORT=5000
DB_HOST=learning-db
DB_USER=postgres
DB_PASSWORD=Ea0583250371
DB_NAME=ai_learning
DB_PORT=5432
ADMIN_PHONE=0583250371
OPENAI_API_KEY=your_openai_key

---

### `docker-compose.yml`

```yaml
version: '3.8'

services:
  db:
    image: postgres:15
    container_name: learning-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: Ea0583250371
      POSTGRES_DB: ai_learning
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  backend:
    build: ./backend
    container_name: learning-backend
    ports:
      - "5000:5000"
    environment:
      DB_HOST: learning-db
      DB_PORT: 5432
      DB_NAME: ai_learning
      DB_USER: postgres
      DB_PASSWORD: Ea0583250371
      OPENAI_API_KEY: your_key_here
      ADMIN_PHONE: 0583250371
    depends_on:
      - db

  frontend:
    build: ./client
    container_name: learning-frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  pgdata:
```
