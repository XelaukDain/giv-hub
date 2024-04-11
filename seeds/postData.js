//work in progress
//need to rename and strcture
const { Post } = require('../models');

const postData = [
  {
    product_name: 'Shoes',
    brand: 'Vans',
    listing_date: 'March 30, 2018',
    section_id: 2,
    filename: './Shoes/vans-checkered.jpg',
    description:
      'Slip on Checkerboard Vans',
    category: 'Shoes',
  },
  {
    product_name: 'Boots',
    brand: 'Timberland',
    listing_date: 'May 05, 2017',
    section_id: 2,
    filename: './Shoes/demtimbs.jpg',
    description: 'Timberland Boots',
    category: 'Shoes',
  },
  {
    product_name: 'Grey Shirt',
    brand: 'Lacoste',
    listing_date: 'May 05, 2017',
    section_id: 1,
    filename: './Clothing/lacosteshirt.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
    category: 'Clothing',
  },
  {
    product_name: 'Snaking collapse',
    brand: 'LedyX',
    listing_date: 'March 30, 2018',
    section_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
    category: 'Clothing',
  },
  {
    product_name: 'Venting issue',
    brand: 'WStudio',
    listing_date: 'May 05, 2017',
    section_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
    category: 'Clothing',
  },
  {
    product_name: 'Pex b vs Pex a',
    brand: 'S_Photo',
    listing_date: 'June 10, 2019',
    section_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
    category: 'Shoes',
  },
  {
    product_name: 'Proflex copper hybrid cutter',
    brand: 'icemanphotos',
    listing_date: 'July 4, 2020',
    section_id: 3,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
    category: 'Accessories',
  },
  {
    product_name: 'Water Heater Thermocouple fix',
    brand: 'VRstudio',
    listing_date: 'August 14, 2016',
    section_id: 4,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
    category: 'Home Goods',
  },
  {
    product_name: 'Water Heater Installation',
    brand: 'DrivingJack',
    listing_date: 'October 15, 2018',
    section_id: 5,
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
    category: 'Electronics',
  },
  {
    product_name: 'New Constuction vs Service plumbing',
    brand: 'Vitalii_Mamchuk',
    listing_date: 'November 3, 2016',
    section_id: 6,
    filename: '07-autumn-mountains.jpg',
    //post body content
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    category: 'Books & Media',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
