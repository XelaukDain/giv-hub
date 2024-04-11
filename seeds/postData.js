//work in progress
//need to rename and strcture
const { Post } = require('../models');

const postData = [
  {
    title: 'Shoes',
    technician: 'Vans',
    start_date: 'March 30, 2018',
    section_id: 2,
    filename: './Shoes/vans-checkered.jpg',
    description:
      'Slip on Checkerboard Vans',
    type_of_job: 'Waste line Work',
  },
  {
    title: 'Boots',
    technician: 'Timberland',
    start_date: 'May 05, 2017',
    section_id: 2,
    filename: './Shoes/demtimbs.jpg',
    description: 'Timberland Boots',
    type_of_job: 'Waste line Work',
  },
  {
    title: 'Grey Shirt',
    technician: 'Lacoste',
    start_date: 'May 05, 2017',
    section_id: 1,
    filename: './Clothing/lacosteshirt.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
    category: 'Waste line Work',
  },
  {
    title: 'Snaking collapse',
    technician: 'LedyX',
    start_date: 'March 30, 2018',
    section_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
    category: 'Waste line Work',
  },
  {
    title: 'Venting issue',
    technician: 'WStudio',
    start_date: 'May 05, 2017',
    section_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
    category: 'Waste line Work',
  },
  {
    title: 'Pex b vs Pex a',
    technician: 'S_Photo',
    start_date: 'June 10, 2019',
    section_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
    category: 'Water Line Work',
  },
  {
    title: 'Proflex copper hybrid cutter',
    technician: 'icemanphotos',
    start_date: 'July 4, 2020',
    section_id: 3,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
    category: 'Gas Line Work',
  },
  {
    title: 'Water Heater Thermocouple fix',
    technician: 'VRstudio',
    start_date: 'August 14, 2016',
    section_id: 4,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
    category: 'Applicance repair',
  },
  {
    title: 'Water Heater Installation',
    technician: 'DrivingJack',
    start_date: 'October 15, 2018',
    section_id: 5,
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
    category: 'Applicance Installation',
  },
  {
    title: 'New Constuction vs Service plumbing',
    technician: 'Vitalii_Mamchuk',
    start_date: 'November 3, 2016',
    section_id: 6,
    filename: '07-autumn-mountains.jpg',
    //post body content
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    category: 'Miscellaneous',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
