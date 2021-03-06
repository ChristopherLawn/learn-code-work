const router = require('express').Router();
const sequelize = require('../config/connection');
const { Language, Comment, User } = require('../models');
// get all languages
router.get('/', (req, res) => {
    Language.findAll({
        attributes: ['name', 'icon_data',]
    })
        .then(dbLanguageData => res.json(dbLanguageData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// get single language by name
router.get('/:name', (req, res) => {
    Language.findOne({
        where: { name: req.params.name },
        attributes: ['id', 'name', 'year_created', 'version_number', 'website', 'description', 'developed_by', 'filename_extension', 'language_type', 'major_organizations', 'licensed_under', 'icon_data'],
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
            const language = dbLanguageData.get({ plain: true })
            res.render('language', {
                language,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// adds a language module - admin only
router.post('/', (req, res) => {
    Language.create({ name: req.body.name, description: req.body.description, major_organizations: req.body.major_organizations, developed_by: req.body.developed_by, year_created: req.body.year_created, version_number: req.body.version_number, filename_extension: req.body.filename_extension, licensed_under: req.body.licensed_under, website: req.body.website, language_type: req.body.language_type, icon_name: req.body.icon_name })
        .then(dbUserData => { res.json(dbUserData) })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// Updates a language module by admin only
router.put('/:name', (req, res) => {
    console.log(req.body);
    console.log(req.params.name)
    Language.update({ name: req.body.newName, description: req.body.description, major_organizations: req.body.major_organizations, developed_by: req.body.developed_by, year_created: req.body.year_created, version_number: req.body.version_number, filename_extension: req.body.filename_extension, licensed_under: req.body.licensed_under, website: req.body.website, language_type: req.body.language_type, icon_name: req.body.icon_name },
        { where: { name: req.params.name }})
        .then(dbLanguageData => {
            res.json(dbLanguageData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//finds and loads single module page to edit
router.get('/edit-module/:name', (req, res) => {
    Language.findOne({
        where: { name: req.params.name },
        attributes: ['id', 'name', 'year_created', 'version_number', 'website', 'description', 'developed_by', 'filename_extension', 'language_type', 'major_organizations', 'licensed_under', 'icon_data']
    }).then(dbLanguageData => {
        if (!dbLanguageData) {
            res.status(404).json({ message: 'No language found with that id' })
            return;
        }
        const language = dbLanguageData.get({ plain: true })
        res.render('edit-language-form', {
            language,
            loggedIn: req.session.loggedIn
        });
    })
});

module.exports = router;