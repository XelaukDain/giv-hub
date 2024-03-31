const { Section } = require('../models');

const sectiondata = [
  {
    name: 'Waste line Work',
    starting_date: 'April 20, 2021 07:00:00',
    description: 'This is a waste line work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Water line Work',
    starting_date: 'June 22, 2021 09:00:00',
    description: 'This is a water line work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Gas Work',
    starting_date: 'January 22, 2021 10:00:00',
    description: 'This is a gas work',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Application Repair',
    starting_date: 'December 22, 2020 11:00:00',
    description: 'This is an application repair',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Appliance Installation',
    starting_date: 'January 22, 2021 10:00:00',
    description: 'This is an appliance installation',
    filename: '03-sand-sea-summer.jpg',
  },
  {
    name: 'Miscellaneous',
    starting_date: 'January 22, 2021 10:00:00',
    description: 'This is a miscellaneous questions and jobs',
    filename: '03-sand-sea-summer.jpg',
  },
];

const seedSection = () => Section.bulkCreate(sectiondata);

module.exports = seedSection;
