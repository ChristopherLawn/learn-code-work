const router = require('express').Router();
const { User } = require('../../models');
const isAdmin = require('../../utils/auth');

router.put('/:username', isAdmin, (req, res) => {
    console.log(req.body.is_admin);
    console.log(req.params.username);
    User.update({
        is_admin: true
    },
    {
        where: {
            username: req.params.username,
        }
    })
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;