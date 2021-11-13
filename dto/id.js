const Joi = require("joi");

/// For validations inside params
/// make sure to id is a valid objectId
/// based on https://www.npmjs.com/package/joi-objectid
const ValidateId = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

module.exports = {
  ValidateId,
};
