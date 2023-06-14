'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/ClientController');

router.get('/client', controller.get);
router.post('/client', controller.post);
router.put('/client', controller.put);
router.delete('/client', controller.delete);

module.exports = router; 
