'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/ProductController');

router.get('/product', controller.get);
router.get('/product/:id', controller.get);
router.post('/product', controller.post);
router.put('/product', controller.put);
router.delete('/product', controller.delete);

module.exports = router; 
