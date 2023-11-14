// config/middleware.js

const withAuth = (req, res, next) => {
    // Check if the user is logged in
    if (!req.session.user_id) {
      // If not, redirect to the login page
      res.redirect('/login');
    } else {
      // If logged in, proceed to the next middleware or route handler
      next();
    }
  };
  
  module.exports = withAuth;
  