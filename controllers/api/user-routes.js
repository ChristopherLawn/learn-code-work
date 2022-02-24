const router = require('express').Router();
const { User } = require('../../models');
const isAdmin = require('../../utils/auth');

// get all users
// Restricted get all users to only the ADMIN
router.get('/', isAdmin, (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
       
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
                req.session.is_admin = dbUserData.is_admin;
                res.json(dbUserData);
            });
        })
});

// login & verify user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            if (req.body.email === 'admin2222@gmail.com') req.session.admin = true;;
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            req.session.is_admin = dbUserData.is_admin;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

//signup admin user only admin has accesses
router.post('/admin', isAdmin, (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        is_admin: true
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
                req.session.is_admin = dbUserData.is_admin

                res.json(dbUserData);
            });
        })
});


// logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;