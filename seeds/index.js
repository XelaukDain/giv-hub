const sequelize = require('../config/connection');
const seedSections = require('./sectionData');
const seedJobs = require('./jobData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSections();

  await seedJobs();

  process.exit(0);
};

seedAll();
