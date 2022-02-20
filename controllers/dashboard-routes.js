const router = require('express').Router();
const sequelize = require('../config/connection');


//create a withAuth type function that checks sessions and see if the user is admin
router.get('/', (req, res) => {
 res.render('homepage', {
     loggedIn: req.session.loggedIn, 
     is_admin: req.session.is_admin
    })
});

module.exports = router;