# XENJS

XENJS adalah framework web ringan untuk Node.js yang menggunakan Express, EJS, dan JSON sebagai database. Dirancang untuk mempermudah pembuatan aplikasi web dinamis dengan pendekatan yang sederhana dan terintegrasi.

## Tech Stack

- **Express**: Framework web minimalis dan fleksibel untuk membangun aplikasi web.
- **EJS**: Templating engine untuk menghasilkan HTML dengan data dinamis.
- **JSON**: Penyimpanan data menggunakan file JSON sebagai database sederhana.

## Struktur Proyek

```bash
/xennjs
  ├── /controllers
  │   ├── authController.js
  │   ├── userController.js
  │   └── adminController.js
  ├── /models
  │   ├── userModel.js
  │   └── adminModel.js
  ├── /views
  │   ├── /auth
  │   │   ├── userLogin.ejs
  │   │   ├── userRegister.ejs
  │   │   ├── adminLogin.ejs
  │   │   └── adminRegister.ejs
  │   ├── index.ejs
  │   ├── userDashboard.ejs
  │   └── adminDashboard.ejs
  ├── /routes
  │   ├── /web
  │   │   ├── authRoutes.js
  │   │   ├── userRoutes.js
  │   │   └── adminRoutes.js
  │   └── index.js
  ├── app.js
  ├── package.json
  └── db.json



```

## Instalasi

**1. Clone Repository:**

```bash
   git clone https://github.com/username/xenjs.git
   cd xenjs

```

**2. Instal Dependensi:**

Untuk menginstal semua dependensi yang diperlukan, jalankan perintah berikut:

```bash
npm run xen:install

```
Perintah ini akan menjalankan npm install untuk menginstal dependensi yang terdaftar di package.json.

## Penggunaan
**3. Menjalankan Server:**

```bash
npm run xen:start

```
Server akan berjalan di http://localhost:9999.

### Command CLI
npm run xen:start untuk Menjalankan server XENJS.
npm run xen:install untuk Menginstal semua dependensi proyek (setara dengan npm install).


### Lisensi
Proyek ini dilisensikan di bawah MIT License.
