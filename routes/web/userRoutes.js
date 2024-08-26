const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();

router.get('/dashboard', userController.getDashboard);

module.exports = router;
