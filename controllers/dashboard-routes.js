const router = require('express').Router();
const sequelize = require('../config/connection');
// const withAuth = require('../utils/auth');
const isAdmin = require('../utils/auth');

//create a withAuth type function that checks sessions and see if the user is admin
router.get('/', isAdmin, (req, res) => {
 res.render('dashboard', {
     loggedIn: req.session.loggedIn, 
    is_admin: req.session.is_admin
    })
});

module.exports = router;