function errorHandler(err, req, res, next) {
  if (err && err.error && err.error.isJoi) {
    const errors = err.error.details.map((er) => ({
      message: er.message,
      path: er.path[0],
    }));
    res.status(400).json({
      // will be "query" here, but could be "headers", "body", or "params"
      type: err.type,
      message: "Validation error",
      details: errors,
    });
  } else {
    next(err);
  }
}

module.exports = errorHandler;
