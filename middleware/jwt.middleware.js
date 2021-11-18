const jwt = require("jsonwebtoken");

module.exports = validateToken = (req, res, next) => {
  // Check header authorization looking for bearer
  const token = req.header("Authorization") ? req.header("Authorization")  : "";

  if (!token || token === "") {
    return res.status(401).json({
      message: "You must provide a token in headers",
    });
  }

  try {
    req.app = jwt.verify(token, process.env.SECRET_KEY);

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error while decrypting token",
    });
  }
};
