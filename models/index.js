const User = require('./User');
const Comment = require('./Comment');
const Language = require('./Language');

// associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Language.hasMany(Comment, {
    foreignKey: 'language_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Comment, Language };