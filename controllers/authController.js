const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

exports.getIndex = (req, res) => {
    res.render('index');
};

// User Authentication
exports.getUserLogin = (req, res) => {
    res.render('auth/userLogin');
};

exports.postUserLogin = (req, res) => {
    const { username, password } = req.body;
    const user = db.get('users').find({ username, password }).value();
    if (user) {
        req.session.user = user;
        return res.redirect('/user/dashboard');
    }
    res.redirect('/user/login');
};

exports.getUserRegister = (req, res) => {
    res.render('auth/userRegister');
};

exports.postUserRegister = (req, res) => {
    const { username, password } = req.body;
    db.get('users').push({ username, password }).write();
    res.redirect('/user/login');
};

// Admin Authentication
exports.getAdminLogin = (req, res) => {
    res.render('auth/adminLogin');
};

exports.postAdminLogin = (req, res) => {
    const { username, password } = req.body;
    const admin = db.get('admins').find({ username, password }).value();
    if (admin) {
        req.session.admin = admin;
        return res.redirect('/admin/dashboard');
    }
    res.redirect('/admin/login');
};

exports.getAdminRegister = (req, res) => {
    res.render('auth/adminRegister');
};

exports.postAdminRegister = (req, res) => {
    const { username, password } = req.body;
    db.get('admins').push({ username, password }).write();
    res.redirect('/admin/login');
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};
