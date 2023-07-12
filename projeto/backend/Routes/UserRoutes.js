'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/LoginController');

router.get('/', controller.user);

module.exports = router;