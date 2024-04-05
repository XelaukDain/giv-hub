const User = require('./User');
const Section = require('./Section');
const Post = require('./Post');

Section.hasMany(Post, {
  foreignKey: 'section_id',
});

Job.belongsTo(Section, {
  foreignKey: 'section_id',
});

module.exports = { User, Section, Post };
