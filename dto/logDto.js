const Joi = require("joi");

const CreateLogDto = Joi.object({
  applicationId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  type: Joi.string().valid("error", "info", "warning").required(),
  priority: Joi.string()
    .valid("lowest", "low", "medium", "high", "highest")
    .required(),
  path: Joi.string().required(),
  message: Joi.string().required(),
  request: Joi.object().required(),
  response: Joi.object().required(),
});

const UpdateLogDto = Joi.object({
  applicationId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  type: Joi.string().valid("error", "info", "warning"),
  priority: Joi.string().valid("lowest", "low", "medium", "high", "highest"),
  path: Joi.string(),
  message: Joi.string(),
  request: Joi.object(),
  response: Joi.object(),
});

module.exports = { CreateLogDto, UpdateLogDto };
