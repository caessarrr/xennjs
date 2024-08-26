const express = require('express');
const authController = require('../../controllers/authController');

const router = express.Router();

// User routes
router.get('/user/login', authController.getUserLogin);
router.post('/user/login', authController.postUserLogin);
router.get('/user/register', authController.getUserRegister);
router.post('/user/register', authController.postUserRegister);

// Admin routes
router.get('/admin/login', authController.getAdminLogin);
router.post('/admin/login', authController.postAdminLogin);
router.get('/admin/register', authController.getAdminRegister);
router.post('/admin/register', authController.postAdminRegister);

router.get('/logout', authController.logout);

router.get('/', authController.getIndex); // Make sure this route is defined

module.exports = router;
