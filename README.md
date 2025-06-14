
## 🎯 Overview

An interactive learning platform that allows users to select a learning topic (category and sub-category), submit a question (prompt), and receive an educational answer generated by AI (via OpenAI).  
The system also includes a learning history per user, logout functionality, and an admin interface.

---

## 🧱 Technologies

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

## 🧪 Key Features

- User registration  
- Login / **Logout**  
- Submit questions and receive AI-generated answers  
- View personal learning history  
- Admin dashboard:
  - View the full list of users
  - View the learning history of each user  
- Admin user is identified by **phone number:** `0583250371`

---

## 🚀 Running Locally

### Prerequisites
- Docker installed
- Node.js and NPM installed

### Getting Started:

```bash
git clone https://github.com/efratAma/AI-Learning-Platform.git
cd AI-Learning-Platform
```

---

### 1. Environment Variables

Create a file named `.env` inside the root directory with the following content:

```env
PORT=5000
DB_HOST=learning-db
DB_USER=postgres
DB_PASSWORD=Ea0583250371
DB_NAME=ai_learning
DB_PORT=5432
ADMIN_PHONE=0583250371
OPENAI_API_KEY=your_openai_key
```
---
REACT_APP_API_URL=http://localhost:3000

