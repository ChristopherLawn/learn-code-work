const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Language, Comment, User } = require('../models');


//create a withAuth type function that checks sessions and see if the user is admin
router.get('/', withAuth, (req, res) => {
 res.render('dashboard', {
     loggedIn: req.session.loggedIn, 
    //  is_admin: req.session.is_admin
    })
});

// loads the edit modules page
router.get('/edit-modules-page', withAuth, (req, res) => {
    Language.findAll({
        attributes: [
          'name',
          'language_type',
          'icon_data'
        ]
    })
    .then(dbLanguageData => {
    const languages = dbLanguageData.map(language => language.get({ plain: true}));
    res.render('edit-modules-page', {
        languages,
        loggedIn: req.session.loggedIn
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

module.exports = router;