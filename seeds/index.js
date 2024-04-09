const sequelize = require('../config/connection');
const seedSections = require('./sectionData');
const seedPosts = require('./postData');
// const seedMessages = require('./messageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSections();

  await seedPosts();

  process.exit(0);
};

seedAll();
