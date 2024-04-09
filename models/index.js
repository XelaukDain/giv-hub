const User = require('./User');
const Section = require('./Section');
const Post = require('./Post');
const Message = require('./Message');

Section.hasMany(Post, {
  foreignKey: 'section_id',
});

Post.belongsTo(Section, {
  foreignKey: 'section_id',
});

User.hasMany(Message, {
  foreignKey: 'user_id',
});

Message.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Section, Post, Message };
