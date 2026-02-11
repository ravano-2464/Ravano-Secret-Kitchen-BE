<div align="center">

# 🍳 Ravano Secret Kitchen - Backend API

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

**REST API untuk aplikasi resep masakan Indonesia**

</div>

---

## 🚀 Instalasi

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan konfigurasi Anda

# Seed database dengan resep awal
node seeder.js

# Jalankan development server
npm run dev
```

---

## 📁 Struktur Proyek

```
├── 📁 .qodo
│   ├── 📁 agents
│   └── 📁 workflows
├── 📁 config
│   └── 📄 db.ts
├── 📁 controllers
│   ├── 📄 authController.ts
│   └── 📄 recipeController.ts
├── 📁 middleware
│   └── 📄 auth.ts
├── 📁 models
│   ├── 📄 Recipe.ts
│   └── 📄 User.ts
├── 📁 routes
│   ├── 📄 auth.ts
│   └── 📄 recipes.ts
├── ⚙️ .env.example
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 seeder.ts
├── 📄 server.ts
└── ⚙️ tsconfig.json
```

---

## 🔌 API Endpoints

### Auth Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register user baru | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get current user | Private |

### Recipe Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/recipes` | Get semua resep | Public |
| GET | `/api/recipes/:id` | Get resep by ID | Public |
| POST | `/api/recipes` | Create resep baru | Private |
| PUT | `/api/recipes/:id` | Update resep | Private |
| DELETE | `/api/recipes/:id` | Delete resep | Private |

---

## 🔐 Authentication

API menggunakan JWT (JSON Web Token) untuk autentikasi.

```bash
# Header Authorization
Authorization: Bearer <token>
```

---

## 📝 Contoh Request

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
```

### Get Recipes
```bash
curl http://localhost:5000/api/recipes
```

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **Node.js** | Runtime JavaScript |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication |
| **Bcryptjs** | Password hashing |
| **Dotenv** | Environment config |

---

<div align="center">

**Dibuat dengan ❤️ oleh Ravano Akbar Widodo**

</div>
