'use strict';

const router = require('express').Router();
const prefix = '/logs';

const controller = require('../controllers/log.controller');

const validator = require('express-joi-validation').createValidator({passError: true})
const validateToken = require('../middleware/jwt.middleware')

const { CreateLogDto, UpdateLogDto } = require('../dto/logDto')
const {ValidateId} = require('../dto/id')

// Get all logs
router.get(`${prefix}/`, validateToken, controller.all);
// Create a new log
router.post(`${prefix}/`, validateToken, validator.body(CreateLogDto), controller.create);
// Get all logs for a specific app
router.post(`${prefix}/:id/app`, validateToken, validator.params(ValidateId), controller.app);
// get single log
router.get(`${prefix}/:id`, validateToken, validator.params(ValidateId), controller.info);
// update a log
router.put(`${prefix}/:id`, validateToken, validator.params(ValidateId), validator.body(UpdateLogDto), controller.update);
// delete log response 204
router.delete(`${prefix}/:id`, validateToken, validator.params(ValidateId), controller.delete);

module.exports = router;