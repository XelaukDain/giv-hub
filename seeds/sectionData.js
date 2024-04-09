const { Section } = require('../models');

const sectiondata = [
  {
    name: 'Clothing',
    description: 'This is a waste line work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Shoes',
    description: 'This is a water line work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Accessories',
    description: 'This is a gas work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Home Goods',
    description: 'This is an application repair',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Electronics',
    description: 'This is an appliance installation',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Books & Media',
    description: 'This is a miscellaneous questions and jobs',
    filename: '03-sand-sea-summer.jpg',
  },
];

const seedSection = () => Section.bulkCreate(sectiondata);

module.exports = seedSection;