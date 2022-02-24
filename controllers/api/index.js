const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const languageRoutes = require('./language-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/languages', languageRoutes);

module.exports = router;