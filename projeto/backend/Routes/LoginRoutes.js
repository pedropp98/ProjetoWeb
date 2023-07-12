'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/LoginController');

router.post('/', controller.login);

module.exports = router;