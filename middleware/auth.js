const mockAuth = (req, res, next) => {
  const isAdmin = req.query.admin === 'true';

  req.user = {
    role: isAdmin ? 'admin' : 'volunteer',
  };

  next();
};

module.exports = { mockAuth };
