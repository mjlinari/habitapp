function isLoggedAsAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    res.sendStatus(401);
  } else {
    next();
  }
}

module.exports = isLoggedAsAdmin;
