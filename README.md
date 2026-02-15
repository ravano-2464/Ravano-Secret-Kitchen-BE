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
├── 📁 config/                  # Konfigurasi aplikasi
│   └── 📄 db.ts                # Koneksi ke database MongoDB
├── 📁 controllers/             # Logika bisnis (handler request)
│   ├── 📄 authController.ts    # Handler autentikasi (register, login, getMe)
│   └── 📄 recipeController.ts  # Handler CRUD resep (get, create, update, delete)
├── 📁 middleware/               # Middleware Express
│   └── 📄 auth.ts              # Middleware proteksi route (JWT verification)
├── 📁 models/                   # Mongoose schema & model
│   ├── 📄 Recipe.ts            # Schema resep (title, category, ingredients, steps, dll.)
│   └── 📄 User.ts              # Schema user (name, email, password) + password hashing
├── 📁 routes/                   # Definisi endpoint API
│   ├── 📄 auth.ts              # Route autentikasi (/api/auth/*)
│   └── 📄 recipes.ts           # Route resep (/api/recipes/*)
├── ⚙️ .env.example              # Template variabel environment
├── ⚙️ .gitignore                # File & folder yang diabaikan Git
├── 📝 README.md                 # Dokumentasi proyek
├── ⚙️ package.json              # Dependensi & script npm
├── ⚙️ package-lock.json         # Lock file dependensi npm
├── 📄 seeder.ts                 # Script seed data resep awal ke database
├── 📄 server.ts                 # Entry point aplikasi Express
└── ⚙️ tsconfig.json             # Konfigurasi TypeScript compiler
```

### 📖 Penjelasan Struktur

| Folder / File | Deskripsi |
|---------------|-----------|
| **`config/`** | Berisi konfigurasi aplikasi. File `db.ts` menangani koneksi ke MongoDB menggunakan Mongoose dengan connection string dari environment variable `MONGODB_URI`. |
| **`controllers/`** | Berisi logika bisnis yang memproses request dari client. `authController.ts` menangani registrasi user, login, dan pengambilan data user yang sedang login. `recipeController.ts` menangani operasi CRUD (Create, Read, Update, Delete) untuk data resep, termasuk fitur pencarian dan filter berdasarkan kategori. |
| **`middleware/`** | Berisi middleware Express. File `auth.ts` mengekspor fungsi `protect` yang memverifikasi JWT token dari header `Authorization` untuk melindungi route yang membutuhkan autentikasi. |
| **`models/`** | Berisi Mongoose schema dan model untuk MongoDB. `Recipe.ts` mendefinisikan schema resep dengan field seperti title, category, difficulty, time, servings, image, description, ingredients, steps, videoUrl, dan tips. `User.ts` mendefinisikan schema user dengan field name, email, dan password, dilengkapi dengan pre-save hook untuk hashing password menggunakan bcrypt. |
| **`routes/`** | Berisi definisi endpoint API. `auth.ts` menghubungkan route `/api/auth/*` ke controller autentikasi. `recipes.ts` menghubungkan route `/api/recipes/*` ke controller resep, dengan middleware `protect` pada route yang membutuhkan autentikasi (POST, PUT, DELETE). |
| **`server.ts`** | Entry point utama aplikasi. Menginisialisasi Express, menghubungkan ke database, mengonfigurasi middleware (CORS, JSON parser), mendaftarkan routes, dan menjalankan server pada port yang ditentukan (default: 5000). |
| **`seeder.ts`** | Script untuk mengisi database dengan data resep awal (seed data). Berisi koleksi resep masakan Indonesia lengkap dengan bahan, langkah, tips, dan video tutorial. Dijalankan sekali saat setup awal proyek. |
| **`tsconfig.json`** | Konfigurasi TypeScript compiler yang menentukan opsi kompilasi seperti target, module system, dan strict mode. |
| **`.env.example`** | Template file environment variable yang berisi key yang diperlukan (`MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRE`, `PORT`) tanpa value sensitif. |

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
