const Joi = require("joi");

const CreateAppDto = Joi.object({
  name: Joi.string().required(),
});

module.exports = { CreateAppDto };
