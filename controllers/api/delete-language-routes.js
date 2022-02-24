const router = require('express').Router();
const { Language } = require('../../models');

// /api/languages/delete/:name
router.delete('/:name', (req, res) => {

    // destroys language module
    Language.destroy({
        where: {
            name: req.params.name
        }
    })
    .then(dbLanguageData => { res.json(dbLanguageData) })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;