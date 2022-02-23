const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Language, Comment, User } = require('../models');


//create a withAuth type function that checks sessions and see if the user is admin
router.get('/', withAuth, (req, res) => {
    Language.findAll({
        attributes: [
            'id',
            'name',
            'year_created',
            'version_number',
            'website',
            'description',
            'developed_by',
            'filename_extension',
            'language_type',
            'major_organizations',
            'licensed_under',
            'icon_data'
        ],
        include: [
            {
                model: Comment,
                attributes: ['comment_text'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbLanguageData => {
        const languages = dbLanguageData.map(language => language.get({ plain: true}));
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            languages
           //  is_admin: req.session.is_admin
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
 
});

// loads the edit modules page
// router.get('/edit-modules-page', withAuth, (req, res) => {
//     Language.findAll({
//         attributes: [
//           'name',
//           'language_type',
//           'icon_data'
//         ]
//     })
//     .then(dbLanguageData => {
//     const languages = dbLanguageData.map(language => language.get({ plain: true}));
//     res.render('edit-modules-page', {
//         languages,
//         loggedIn: req.session.loggedIn
//     });
//     })
//     .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//     });
// });

module.exports = router;