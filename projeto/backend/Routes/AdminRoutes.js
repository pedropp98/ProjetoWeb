'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/AdminController');

router.get('/admin', controller.get);
router.get('/admin/:id', controller.getOneById);
router.post('/admin', controller.post);
router.put('/admin/:id', controller.put);
router.delete('/admin', controller.delete);

module.exports = router; 
