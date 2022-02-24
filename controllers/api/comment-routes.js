const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const isAdmin = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
    });
});

// create new comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            // ...req.body,
            user_id: req.session.user_id,
            language_id: req.body.language_id,
            comment_text: req.body.comment_text
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// delete comment based on ID 
//Added only the ADMIN can do this
router.delete('/:id', isAdmin, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;