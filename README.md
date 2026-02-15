<div align="center">

<!-- Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=🍳%20Ravano%20Secret%20Kitchen&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Backend%20REST%20API&descSize=18&descAlignY=55" width="100%"/>

<!-- Badges Row 1 - Core Tech -->
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)

<!-- Badges Row 2 - Features -->
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Mongoose](https://img.shields.io/badge/Mongoose-8.6-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![REST API](https://img.shields.io/badge/REST-API-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](#-api-endpoints)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

<!-- Badges Row 3 - Status -->
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

<br/>

**🇮🇩 REST API untuk aplikasi resep masakan Indonesia**

*Menyajikan 25+ resep autentik nusantara dengan fitur pencarian, filter kategori, dan autentikasi pengguna*

---

[🚀 Quick Start](#-quick-start) •
[📁 Struktur Proyek](#-struktur-proyek) •
[🔌 API Endpoints](#-api-endpoints) •
[📊 Data Models](#-data-models) •
[🔐 Authentication](#-authentication) •
[🛠️ Tech Stack](#️-tech-stack)

</div>

---

## ✨ Fitur Utama

<table>
<tr>
<td align="center" width="25%">

### 🔐
### Autentikasi JWT
Register, Login & profil user dengan JSON Web Token

</td>
<td align="center" width="25%">

### 📖
### CRUD Resep
Create, Read, Update, Delete resep masakan lengkap

</td>
<td align="center" width="25%">

### 🔍
### Pencarian & Filter
Cari resep berdasarkan nama atau filter kategori

</td>
<td align="center" width="25%">

### 🛡️
### Protected Routes
Route terproteksi middleware untuk operasi sensitif

</td>
</tr>
<tr>
<td align="center" width="25%">

### 🔒
### Password Hashing
Bcrypt dengan salt 10 rounds untuk keamanan password

</td>
<td align="center" width="25%">

### 🌐
### CORS Enabled
Cross-Origin Resource Sharing untuk akses frontend

</td>
<td align="center" width="25%">

### 📦
### Database Seeder
25+ resep masakan Indonesia siap pakai

</td>
<td align="center" width="25%">

### ⚡
### TypeScript
Type-safe development dengan TypeScript 5.9

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

> **Pastikan sudah terinstall di sistem Anda:**

| Software | Versi Minimum | Download |
|----------|:------------:|----------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | `≥ 18.x` | [nodejs.org](https://nodejs.org/) |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | `≥ 6.x` | [mongodb.com](https://www.mongodb.com/try/download/community) |
| ![npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white) | `≥ 9.x` | Terinstall bersama Node.js |

### Langkah Instalasi

```bash
# 1️⃣ Clone repository
git clone <repository-url>
cd Backend

# 2️⃣ Install dependencies
npm install

# 3️⃣ Setup environment variables
cp .env.example .env
# Edit .env dengan konfigurasi Anda (lihat bagian Environment Variables)

# 4️⃣ Seed database dengan 25+ resep masakan Indonesia
node seeder.ts

# 5️⃣ Jalankan development server
npm run dev
```

> ✅ Server akan berjalan di `http://localhost:5000` (accessible on all network interfaces)

### 📜 Available Scripts

| Script | Command | Deskripsi |
|--------|---------|-----------|
| 🚀 **Start** | `npm start` | Jalankan server (production) |
| 🔄 **Dev** | `npm run dev` | Jalankan server dengan auto-reload (`--watch`) |

---

## ⚙️ Environment Variables

Buat file `.env` di root project berdasarkan template `.env.example`:

```env
# 🌐 Server Configuration
PORT=5000                                          # Port server (default: 5000)

# 🗄️ Database Configuration
MONGODB_URI=mongodb://localhost:27017/ravano-secret-kitchen  # MongoDB connection string

# 🔑 JWT Configuration
JWT_SECRET=your_jwt_secret_key_here                # Secret key untuk sign JWT token
JWT_EXPIRE=7d                                      # Masa berlaku token (contoh: 7d, 24h, 30m)
```

> ⚠️ **Penting:** Jangan pernah commit file `.env` ke repository! File ini sudah terdaftar di `.gitignore`.

---

## 📁 Struktur Proyek

```
Backend/
├── 📁 config/                  # ⚙️ Konfigurasi aplikasi
│   └── 📄 db.ts                # Koneksi ke database MongoDB
├── 📁 controllers/             # 🎮 Logika bisnis (handler request)
│   ├── 📄 authController.ts    # Handler autentikasi (register, login, getMe)
│   └── 📄 recipeController.ts  # Handler CRUD resep (get, create, update, delete)
├── 📁 middleware/               # 🛡️ Middleware Express
│   └── 📄 auth.ts              # Middleware proteksi route (JWT verification)
├── 📁 models/                   # 📊 Mongoose schema & model
│   ├── 📄 Recipe.ts            # Schema resep (title, category, ingredients, steps, dll.)
│   └── 📄 User.ts              # Schema user (name, email, password) + password hashing
├── 📁 routes/                   # 🔌 Definisi endpoint API
│   ├── 📄 auth.ts              # Route autentikasi (/api/auth/*)
│   └── 📄 recipes.ts           # Route resep (/api/recipes/*)
├── ⚙️ .env.example              # Template variabel environment
├── ⚙️ .gitignore                # File & folder yang diabaikan Git
├── 📝 README.md                 # Dokumentasi proyek (file ini)
├── ⚙️ package.json              # Dependensi & script npm
├── ⚙️ package-lock.json         # Lock file dependensi npm
├── 📄 seeder.ts                 # Script seed data resep awal ke database
├── 📄 server.ts                 # Entry point aplikasi Express
└── ⚙️ tsconfig.json             # Konfigurasi TypeScript compiler
```

### 📖 Penjelasan Detail Struktur

<details>
<summary><b>📁 config/</b> — Konfigurasi Aplikasi</summary>

| File | Deskripsi |
|------|-----------|
| `db.ts` | Menangani koneksi ke MongoDB menggunakan Mongoose. Membaca connection string dari environment variable `MONGODB_URI`. Jika koneksi gagal, proses akan berhenti dengan `process.exit(1)`. |

</details>

<details>
<summary><b>📁 controllers/</b> — Logika Bisnis</summary>

| File | Fungsi | Deskripsi |
|------|--------|-----------|
| `authController.ts` | `register()` | Registrasi user baru — cek duplikasi email, buat user, return JWT token |
| | `login()` | Login user — validasi email & password, return JWT token |
| | `getMe()` | Get profil user yang sedang login berdasarkan JWT token |
| | `generateToken()` | Helper function untuk generate JWT token |
| `recipeController.ts` | `getRecipes()` | Get semua resep dengan support filter kategori dan pencarian |
| | `getRecipe()` | Get detail satu resep berdasarkan ID |
| | `createRecipe()` | Buat resep baru (memerlukan autentikasi) |
| | `updateRecipe()` | Update resep yang sudah ada (memerlukan autentikasi) |
| | `deleteRecipe()` | Hapus resep (memerlukan autentikasi) |

</details>

<details>
<summary><b>📁 middleware/</b> — Middleware Express</summary>

| File | Fungsi | Deskripsi |
|------|--------|-----------|
| `auth.ts` | `protect()` | Memverifikasi JWT token dari header `Authorization: Bearer <token>`. Jika valid, menyimpan data user ke `req.user` untuk digunakan oleh controller. |

</details>

<details>
<summary><b>📁 models/</b> — Mongoose Schema & Model</summary>

| File | Deskripsi |
|------|-----------|
| `Recipe.ts` | Schema resep dengan field: `id`, `title`, `category`, `difficulty`, `time`, `servings`, `image`, `description`, `ingredients[]`, `steps[]`, `videoUrl`, `tips[]`, `createdBy`, `createdAt`. Category menggunakan enum: `Masakan Utama`, `Masakan Berkuah`, `Sayuran`, `Kue dan Camilan`. Difficulty menggunakan enum: `Mudah`, `Sedang`, `Sulit`. |
| `User.ts` | Schema user dengan field: `name`, `email`, `password`, `createdAt`. Dilengkapi pre-save hook untuk hashing password dengan bcrypt (salt 10 rounds) dan method `matchPassword()` untuk verifikasi password saat login. |

</details>

<details>
<summary><b>📁 routes/</b> — Definisi Endpoint API</summary>

| File | Base Path | Deskripsi |
|------|-----------|-----------|
| `auth.ts` | `/api/auth/*` | Menghubungkan route autentikasi ke controller. Route `/me` dilindungi middleware `protect`. |
| `recipes.ts` | `/api/recipes/*` | Menghubungkan route resep ke controller. Route `POST`, `PUT`, `DELETE` dilindungi middleware `protect`. Route `GET` bersifat public. |

</details>

<details>
<summary><b>📄 Root Files</b> — File di Root Directory</summary>

| File | Deskripsi |
|------|-----------|
| `server.ts` | Entry point utama. Menginisialisasi Express, koneksi database, middleware (CORS, JSON parser), mendaftarkan routes, dan menjalankan server pada port yang ditentukan (default: 5000). Root endpoint `/` mengembalikan pesan status API. Juga menangani error global. |
| `seeder.ts` | Script untuk mengisi database dengan 25+ resep masakan Indonesia dari berbagai kategori. Berisi data lengkap termasuk bahan, langkah memasak, tips, dan link video tutorial YouTube. Dijalankan sekali saat setup awal. |
| `tsconfig.json` | Konfigurasi TypeScript compiler — menentukan opsi kompilasi seperti target, module system, dan strict mode. |
| `.env.example` | Template environment variable yang berisi key yang diperlukan tanpa value sensitif. |

</details>

---

## 🔌 API Endpoints

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Deskripsi | Access | Body |
|:------:|----------|-----------|:------:|------|
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/auth/register` | Register user baru | 🌐 Public | `name`, `email`, `password` |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/auth/login` | Login user | 🌐 Public | `email`, `password` |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/api/auth/me` | Get current user | 🔒 Private | — |

### 📖 Recipe Routes — `/api/recipes`

| Method | Endpoint | Deskripsi | Access | Query / Body |
|:------:|----------|-----------|:------:|--------------|
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/api/recipes` | Get semua resep | 🌐 Public | `?category=...&search=...` |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/api/recipes/:id` | Get resep by ID | 🌐 Public | — |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/recipes` | Create resep baru | 🔒 Private | Recipe object |
| ![PUT](https://img.shields.io/badge/PUT-FCA130?style=flat-square) | `/api/recipes/:id` | Update resep | 🔒 Private | Updated fields |
| ![DELETE](https://img.shields.io/badge/DELETE-F93E3E?style=flat-square) | `/api/recipes/:id` | Delete resep | 🔒 Private | — |

### 🔍 Query Parameters (GET `/api/recipes`)

| Parameter | Type | Deskripsi | Contoh |
|-----------|------|-----------|--------|
| `category` | `string` | Filter berdasarkan kategori | `?category=Masakan Utama` |
| `search` | `string` | Cari berdasarkan title atau description | `?search=rendang` |

> 📝 **Kategori yang tersedia:** `Masakan Utama` · `Masakan Berkuah` · `Sayuran` · `Kue dan Camilan`
>
> Gunakan `Semua` atau kosongkan parameter category untuk menampilkan semua resep.

---

## 📊 Data Models

### 👤 User Schema

```typescript
{
  name:      String    // required, trimmed
  email:     String    // required, unique, lowercase, validated format
  password:  String    // required, min 6 chars, hashed (bcrypt), hidden from queries
  createdAt: Date      // auto-generated
}
```

> 🔒 Password di-hash otomatis menggunakan **bcrypt** dengan **10 salt rounds** sebelum disimpan ke database. Field `password` menggunakan `select: false` sehingga tidak dikembalikan dalam query default.

### 🍳 Recipe Schema

```typescript
{
  id:          String     // required, unique (custom ID)
  title:       String     // required, trimmed
  category:    String     // required, enum: ['Masakan Utama', 'Masakan Berkuah', 'Sayuran', 'Kue dan Camilan']
  difficulty:  String     // required, enum: ['Mudah', 'Sedang', 'Sulit']
  time:        String     // required (contoh: "30 menit", "2 jam")
  servings:    String     // required (contoh: "4 porsi", "20 potong")
  image:       String     // required (URL gambar)
  description: String     // required
  ingredients: [String]   // required (daftar bahan)
  steps:       [String]   // required (langkah-langkah memasak)
  videoUrl:    String     // optional (URL video tutorial YouTube)
  tips:        [String]   // optional (tips memasak)
  createdBy:   ObjectId   // referensi ke User
  createdAt:   Date       // auto-generated
}
```

---

## 🔐 Authentication

API menggunakan **JWT (JSON Web Token)** untuk autentikasi. Token dikirimkan melalui header `Authorization`.

### 🔄 Alur Autentikasi

```
┌─────────┐          ┌──────────┐          ┌──────────┐
│  Client  │──POST──▶│  /login   │──verify──▶│ Database │
│          │         │ /register │          │          │
└────┬─────┘         └────┬─────┘          └──────────┘
     │                    │
     │◀──── JWT Token ────┘
     │
     │   ┌──────────────────────┐
     │──▶│  Protected Endpoint  │
     │   │  Authorization:      │
     │   │  Bearer <token>      │
     │   └──────────┬───────────┘
     │              │
     │              ▼
     │   ┌──────────────────────┐
     │   │  Middleware: protect  │
     │   │  - Verify token      │
     │   │  - Attach user       │
     │   └──────────┬───────────┘
     │              │
     │◀── Response ─┘
```

### Format Header

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Token Configuration

| Config | Default | Deskripsi |
|--------|---------|-----------|
| `JWT_SECRET` | — | Secret key untuk sign & verify token |
| `JWT_EXPIRE` | `7d` | Masa berlaku token (7 hari) |

---

## 📝 Contoh Request & Response

### 1️⃣ Register User

**Request:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }'
```

**Response:** `201 Created`
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 2️⃣ Login User

**Request:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "123456"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 3️⃣ Get Current User

**Request:**
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <your_token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 4️⃣ Get All Recipes (dengan Filter)

**Request:**
```bash
# Semua resep
curl http://localhost:5000/api/recipes

# Filter berdasarkan kategori
curl "http://localhost:5000/api/recipes?category=Masakan%20Utama"

# Pencarian berdasarkan nama
curl "http://localhost:5000/api/recipes?search=rendang"

# Kombinasi filter dan pencarian
curl "http://localhost:5000/api/recipes?category=Sayuran&search=lodeh"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
      "title": "Rendang Daging Sapi",
      "category": "Masakan Utama",
      "difficulty": "Sedang",
      "time": "3 jam",
      "servings": "6 porsi",
      "image": "https://images.unsplash.com/...",
      "description": "Rendang adalah masakan daging bercita rasa pedas...",
      "ingredients": ["1 kg daging sapi, potong dadu", "..."],
      "steps": ["Haluskan cabai merah...", "..."],
      "videoUrl": "https://www.youtube.com/watch?v=...",
      "tips": ["Gunakan daging sapi bagian sandung lamur...", "..."],
      "createdAt": "2026-02-15T10:30:00.000Z"
    }
  ]
}
```

### 5️⃣ Get Recipe by ID

**Request:**
```bash
curl http://localhost:5000/api/recipes/6c84fb90-12c4-11e1-840d-7b25c5ee775a
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    "title": "Rendang Daging Sapi",
    "category": "Masakan Utama",
    "difficulty": "Sedang",
    "time": "3 jam",
    "servings": "6 porsi",
    "image": "https://images.unsplash.com/...",
    "description": "Rendang adalah masakan daging bercita rasa pedas...",
    "ingredients": ["1 kg daging sapi, potong dadu", "400 ml santan kental", "..."],
    "steps": ["Haluskan cabai merah...", "..."],
    "videoUrl": "https://www.youtube.com/watch?v=DMcFqtm1lfY",
    "tips": ["Gunakan daging sapi bagian sandung lamur..."],
    "createdAt": "2026-02-15T10:30:00.000Z"
  }
}
```

### 6️⃣ Create New Recipe

**Request:**
```bash
curl -X POST http://localhost:5000/api/recipes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "id": "custom-unique-id",
    "title": "Nasi Uduk",
    "category": "Masakan Utama",
    "difficulty": "Mudah",
    "time": "45 menit",
    "servings": "4 porsi",
    "image": "https://example.com/nasi-uduk.jpg",
    "description": "Nasi gurih khas Betawi",
    "ingredients": ["2 cup beras", "200 ml santan", "1 lembar daun salam"],
    "steps": ["Cuci beras", "Masak dengan santan dan daun salam"],
    "tips": ["Gunakan santan kental untuk rasa lebih gurih"]
  }'
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": { "...recipe object..." }
}
```

### 7️⃣ Update Recipe

**Request:**
```bash
curl -X PUT http://localhost:5000/api/recipes/custom-unique-id \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "title": "Nasi Uduk Betawi Spesial",
    "difficulty": "Sedang"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": { "...updated recipe object..." }
}
```

### 8️⃣ Delete Recipe

**Request:**
```bash
curl -X DELETE http://localhost:5000/api/recipes/custom-unique-id \
  -H "Authorization: Bearer <your_token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {}
}
```

---

## ❌ Error Handling

API menggunakan error handling yang konsisten dengan format response berikut:

### Error Response Format

```json
{
  "message": "Error description"
}
```

### HTTP Status Codes

| Code | Status | Deskripsi |
|:----:|--------|-----------|
| ![200](https://img.shields.io/badge/200-OK-49CC90?style=flat-square) | OK | Request berhasil |
| ![201](https://img.shields.io/badge/201-Created-49CC90?style=flat-square) | Created | Resource berhasil dibuat |
| ![400](https://img.shields.io/badge/400-Bad%20Request-FCA130?style=flat-square) | Bad Request | Request tidak valid (user sudah ada, dll.) |
| ![401](https://img.shields.io/badge/401-Unauthorized-F93E3E?style=flat-square) | Unauthorized | Token tidak valid atau tidak ada |
| ![404](https://img.shields.io/badge/404-Not%20Found-F93E3E?style=flat-square) | Not Found | Resource tidak ditemukan |
| ![500](https://img.shields.io/badge/500-Server%20Error-F93E3E?style=flat-square) | Server Error | Internal server error |

### Contoh Error Responses

```json
// 400 - User Already Exists
{ "message": "User already exists" }

// 400 - Missing Credentials
{ "message": "Please provide an email and password" }

// 401 - Invalid Credentials
{ "message": "Invalid credentials" }

// 401 - Not Authorized
{ "message": "Not authorized to access this route" }

// 404 - Recipe Not Found
{ "message": "Recipe not found" }

// 500 - Server Error
{ "message": "Server Error", "error": "..." }
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="20%">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="48"/>

**Node.js 18+**
JavaScript Runtime

</td>
<td align="center" width="20%">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48"/>

**TypeScript 5.9**
Type Safety

</td>
<td align="center" width="20%">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="48"/>

**Express 4.21**
Web Framework

</td>
<td align="center" width="20%">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="48"/>

**MongoDB 8+**
NoSQL Database

</td>
<td align="center" width="20%">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="48"/>

**Mongoose 8.6**
MongoDB ODM

</td>
</tr>
</table>

### 📦 Dependencies

<details>
<summary><b>Production Dependencies</b></summary>

| Package | Version | Deskripsi |
|---------|:-------:|-----------|
| ![express](https://img.shields.io/badge/express-^4.21.0-000000?style=flat-square&logo=express) | `^4.21.0` | Web framework untuk Node.js |
| ![mongoose](https://img.shields.io/badge/mongoose-^8.6.0-880000?style=flat-square&logo=mongoose) | `^8.6.0` | MongoDB ODM (Object Document Mapper) |
| ![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-^9.0.2-000000?style=flat-square&logo=jsonwebtokens) | `^9.0.2` | Implementasi JSON Web Tokens |
| ![bcryptjs](https://img.shields.io/badge/bcryptjs-^2.4.3-9B59B6?style=flat-square) | `^2.4.3` | Library hashing password |
| ![cors](https://img.shields.io/badge/cors-^2.8.5-3498DB?style=flat-square) | `^2.8.5` | Cross-Origin Resource Sharing middleware |
| ![dotenv](https://img.shields.io/badge/dotenv-^16.4.5-ECD53F?style=flat-square&logo=dotenv) | `^16.4.5` | Loader environment variables dari `.env` |

</details>

<details>
<summary><b>Dev Dependencies</b></summary>

| Package | Version | Deskripsi |
|---------|:-------:|-----------|
| ![typescript](https://img.shields.io/badge/typescript-^5.9.3-3178C6?style=flat-square&logo=typescript) | `^5.9.3` | TypeScript compiler |
| `@types/bcryptjs` | `^2.4.6` | Type definitions untuk bcryptjs |
| `@types/express` | `^5.0.6` | Type definitions untuk Express |
| `@types/jsonwebtoken` | `^9.0.10` | Type definitions untuk jsonwebtoken |

</details>

---

## 🍽️ Seed Data — Resep yang Tersedia

Seeder menyediakan **25+ resep masakan Indonesia** autentik yang siap pakai:

<details>
<summary><b>🥘 Masakan Utama (10+ resep)</b></summary>

| # | Resep | Difficulty | Waktu |
|:-:|-------|:----------:|:-----:|
| 1 | Rendang Daging Sapi | 🟡 Sedang | 3 jam |
| 2 | Nasi Goreng Kampung | 🟢 Mudah | 30 menit |
| 3 | Sate Ayam Madura | 🟡 Sedang | 1 jam |
| 4 | Gudeg Jogja | 🔴 Sulit | 4 jam |
| 5 | Opor Ayam | 🟡 Sedang | 1 jam |
| 6 | Ayam Goreng Kalasan | 🟡 Sedang | 1 jam |
| 7 | Tahu Telur | 🟢 Mudah | 30 menit |
| 8 | Pepes Ikan Mas | 🔴 Sulit | 1.5 jam |
| 9 | Ayam Betutu | 🔴 Sulit | 3 jam |
| 10 | Ikan Bakar Jimbaran | 🟡 Sedang | 1 jam |
| 11 | Mie Goreng Jawa | 🟡 Sedang | 45 menit |

</details>

<details>
<summary><b>🍜 Masakan Berkuah (4 resep)</b></summary>

| # | Resep | Difficulty | Waktu |
|:-:|-------|:----------:|:-----:|
| 1 | Soto Ayam Kuning | 🟢 Mudah | 1 jam |
| 2 | Bakso Sapi | 🔴 Sulit | 2 jam |
| 3 | Rawon Surabaya | 🟡 Sedang | 2 jam |
| 4 | Soto Betawi | 🟡 Sedang | 1.5 jam |

</details>

<details>
<summary><b>🥬 Sayuran (4 resep)</b></summary>

| # | Resep | Difficulty | Waktu |
|:-:|-------|:----------:|:-----:|
| 1 | Sayur Asem Jakarta | 🟢 Mudah | 40 menit |
| 2 | Gado-Gado | 🟢 Mudah | 45 menit |
| 3 | Sayur Lodeh | 🟡 Sedang | 45 menit |
| 4 | Capcay Kuah | 🟢 Mudah | 30 menit |

</details>

<details>
<summary><b>🍰 Kue dan Camilan (8+ resep)</b></summary>

| # | Resep | Difficulty | Waktu |
|:-:|-------|:----------:|:-----:|
| 1 | Kue Lapis Legit | 🔴 Sulit | 2.5 jam |
| 2 | Pisang Goreng Crispy | 🟢 Mudah | 20 menit |
| 3 | Pempek Palembang | 🔴 Sulit | 2 jam |
| 4 | Perkedel Kentang | 🟢 Mudah | 45 menit |
| 5 | Martabak Manis | 🟡 Sedang | 1 jam |
| 6 | Klepon | 🟡 Sedang | 1 jam |
| 7 | Es Teler | 🟢 Mudah | 20 menit |
| 8 | Kolak Pisang | 🟢 Mudah | 30 menit |

</details>

---

## 🏗️ Arsitektur Aplikasi

```
                    ┌──────────────────┐
                    │     Client       │
                    │  (Frontend App)  │
                    └────────┬─────────┘
                             │ HTTP Request
                             ▼
                    ┌──────────────────┐
                    │    Express.js    │
                    │   (server.ts)    │
                    ├──────────────────┤
                    │   Middleware:    │
                    │  ┌────────────┐  │
                    │  │    CORS    │  │
                    │  │ JSON Parse │  │
                    │  └────────────┘  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
     ┌────────────┐  ┌────────────┐  ┌────────────┐
     │   Auth     │  │  Recipe    │  │   Root     │
     │  Routes    │  │  Routes    │  │  Route /   │
     │ /api/auth  │  │/api/recipes│  │  (health)  │
     └─────┬──────┘  └─────┬──────┘  └────────────┘
           │               │
           ▼               ▼
     ┌────────────┐  ┌────────────┐
     │   Auth     │  │  Recipe    │
     │ Middleware │  │ Middleware │
     │ (protect)  │  │ (protect)  │
     └─────┬──────┘  └─────┬──────┘
           │               │
           ▼               ▼
     ┌─────────────────────────────┐
     │       Controllers           │
     │  authController.ts          │
     │  recipeController.ts        │
     └────────────┬────────────────┘
                  │
                  ▼
     ┌─────────────────────────────┐
     │     Mongoose Models         │
     │  User.ts  │  Recipe.ts      │
     └────────────┬────────────────┘
                  │
                  ▼
     ┌─────────────────────────────┐
     │        MongoDB              │
     │  ravano-secret-kitchen DB   │
     └─────────────────────────────┘
```

---

## 🤝 Contributing

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" width="100%"/>

**Dibuat dengan ❤️ oleh Ravano Akbar Widodo**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![BINUS](https://img.shields.io/badge/BINUS-University-blue?style=for-the-badge)

*Ravano Secret Kitchen — Backend API © 2026*

</div>
