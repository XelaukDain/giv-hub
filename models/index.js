const User = require('./User');
const Section = require('./Section');
const Job = require('./Job');

Section.hasMany(Job, {
  foreignKey: 'section_id',
});

Job.belongsTo(Section, {
  foreignKey: 'section_id',
});

module.exports = { User, Section, Job };
