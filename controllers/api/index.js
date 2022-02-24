const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const languageRoutes = require('./language-routes');
const deleteLanguageRoutes = require('./delete-language-routes');
const editUser = require('./edit-user');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/languages', languageRoutes);
router.use('/delete', deleteLanguageRoutes);
router.use('/admin', editUser);

module.exports = router;