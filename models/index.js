const User = require('./User');
const Comment = require('./Comment');
const Language = require('./Language');

// associations
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Language.hasMany(Comment, {
    foreignKey: 'language_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Language, {
    foreignKey: 'language_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Comment, Language };