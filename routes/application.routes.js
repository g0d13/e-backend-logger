"use strict";

const router = require("express").Router();

const prefix = "/apps";

const controller = require("../controllers/application.controller");
const { CreateAppDto } = require("../dto/appDto");


const validator = require("express-joi-validation").createValidator({
  passError: true,
});
const { ValidateId } = require("../dto/id");

// find all apps
router.get(`${prefix}/`, validateToken, controller.findAll);

// generate token for specific app
router.post(
  `${prefix}/:id/auth`,
  validator.params(ValidateId),
  controller.auth
);
// create a new app
router.post(`${prefix}/`, validator.body(CreateAppDto), controller.create);

module.exports = router;
