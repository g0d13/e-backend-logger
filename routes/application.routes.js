'use strict'

const router = require('express').Router();

const prefix = '/application';

const controller = require('../controllers/application.controller');

router.get(`${prefix}/`, controller.findAll);
router.post(`${prefix}/`, controller.create);


module.exports = router;