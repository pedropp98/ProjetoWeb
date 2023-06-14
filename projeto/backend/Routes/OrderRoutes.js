'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/OrderController');

router.get('/order', controller.get);
router.post('/order', controller.post);
router.put('/order', controller.put);
router.delete('/order', controller.delete);

module.exports = router; 
