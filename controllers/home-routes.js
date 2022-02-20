const router = require('express').Router();
const { Language, Comment, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  Language.findAll({
    attributes: [
      'name',
      'language_type',
      'icon_data'
    ]
})
  .then(dbLanguageData => {
    const languages = dbLanguageData.map(language => language.get({ plain: true}));
    res.render('homepage', {
      languages,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;