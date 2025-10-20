//Application-level middleware
const appMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`time: ${timestamp},  method: ${method},  url: ${url}`);
  next();
};

module.exports = appMiddleware;