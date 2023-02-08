const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        const message = `Access denied.`
        return res.status(403).json({ message, data: err })
      }

      req.user = user;
      next();
    });
  } else {
    const message = `authorization token not provided.`
    return res.status(401).json({ message })
  }
};

module.exports = authenticateJWT;

