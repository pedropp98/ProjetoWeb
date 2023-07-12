'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/ProductController');

router.get('/product', controller.getAll);
router.get('/product/:id', controller.getOneById);
router.post('/product', controller.post);
router.put('/product/:id', controller.put);
router.delete('/product', controller.delete);

module.exports = router; 
