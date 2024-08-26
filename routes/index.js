const express = require('express');
const authRoutes = require('./web/authRoutes');
const userRoutes = require('./web/userRoutes');
const adminRoutes = require('./web/adminRoutes');

const router = express.Router();

router.use('/', authRoutes);
router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
