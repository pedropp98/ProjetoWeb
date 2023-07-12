'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/LoginController');

router.post('/login', controller.logout);
router.get('/login', controller.login);

module.exports = router;
