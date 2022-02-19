const router = require('express').Router();
const sequelize = require('../config/connection');
const { Language, Comment, User } = require('../models');

// get all languages
router.get('/', (req, res) => {
    Language.findAll({
        attributes: ['name']
    })
        .then(dbLanguageData => res.json(dbLanguageData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Language.findOne({
        where: {
            id: req.params.id
        },
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
            'licensed_under'
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
            if (!dbLanguageData) {
                res.status(404).json({ message: 'No language found with that id' })
                return;
            }
            res.json(dbLanguageData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.get('/javascript', async (req, res) => {
// full route 'website.com/languages/javascript'
// res.render *handlebars view*
// once rendered, pass in *comment data* & catch error
// use try/async/await function
//     const commentData = await Comment.findAll({
//         where: {
//             language_name: 'javascript'
//         },
//         include: [User]
//     });
//     const languageData = await Language.findAll({
//         where: {
//             name: 'javascript'
//         }
//     })
//     const comments = commentData.map((commentStuff) => commentStuff.get({ plain: true }))
//     const language = languageData.get({ plain: true })
//     res.render('javascript', {
//         loggenIn: req.session.loggenIn,
//         comments,
//         language
//     })
// });

// router.get('/php', (req, res) => {

// });

// router.get('/asp', (req, res) => {

// });

// router.get('/node', (req, res) => {

// });

module.exports = router;