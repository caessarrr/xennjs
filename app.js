const express = require('express');
const session = require('express-session');
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const routes = require('./routes'); // Panggil file routes/index.js

const app = express();

// Set up database
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ users: [], admins: [] }).write();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'your-secret-key', // Ganti dengan secret key yang lebih kuat
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Gunakan semua rute dari routes/index.js
app.use(routes);

// Start server
app.listen(3000, () => {
    console.log('XENNJS server running on http://localhost:3000');
});
