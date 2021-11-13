const jwt = require("jsonwebtoken");

/// Generate and sign a new jwt token
function generateJWT(app) {
  return jwt.sign(app, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
}

module.exports = generateJWT;
