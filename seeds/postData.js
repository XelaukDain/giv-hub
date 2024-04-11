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
    description: 'Grey Lacoste T-Shirt',
    category: 'Clothing',
  },
  {
    product_name: 'Green Prom Dress',
    brand: 'LedyX',
    listing_date: 'March 30, 2018',
    section_id: 1,
    filename: './Clothing/greendress.jpg',
    description:
      'Worn once for wedding, super pretty color size M',
    category: 'Clothing',
  },
  {
    product_name: 'Motley Crue TShirt',
    brand: 'WStudio',
    listing_date: 'May 05, 2017',
    section_id: 1,
    filename: './Clothing/motleycrueshirt.jpg',
    description: 'Red band shirt, Size S',
    category: 'Clothing',
  },
  {
    product_name: 'Los Alto Boots',
    brand: 'S_Photo',
    listing_date: 'June 10, 2019',
    section_id: 2,
    filename: './Shoes/redboots.jpg',
    description: 'Los Alto Boots Size 9 Botas Vaqueras ',
    category: 'Shoes',
  },
  {
    product_name: 'Vintage Snapback',
    brand: 'icemanphotos',
    listing_date: 'July 4, 2020',
    section_id: 3,
    filename: './Accessories/usahat.jpg',
    description: '90s vintage snapback',
    category: 'Accessories',
  },
  {
    product_name: 'Jewelry Stand',
    brand: 'icemanphotos',
    listing_date: 'July 4, 2020',
    section_id: 3,
    filename: './Accessories/jewelrystand.jpg',
    description: 'Small jewelry stand',
    category: 'Accessories',
  },
  {
    product_name: 'Terracotta Clay Pots',
    brand: 'VRstudio',
    listing_date: 'August 14, 2016',
    section_id: 4,
    filename: './Home/claypot.jpg',
    description: 'Terracotta Clay',
    category: 'Home Goods',
  },
  {
    product_name: 'Entertainment Center',
    brand: 'VRstudio',
    listing_date: 'August 14, 2016',
    section_id: 4,
    filename: './Home/tvstand.jpg',
    description: 'L: 60" W: 19.5" H: 30"',
    category: 'Home Goods',
  },
  {
    product_name: 'Strainer',
    brand: 'VRstudio',
    listing_date: 'August 14, 2016',
    section_id: 4,
    filename: './Home/strainer.jpg',
    description: 'stainless steel',
    category: 'Home Goods',
  },
  {
    product_name: 'Mouse',
    brand: 'DrivingJack',
    listing_date: 'October 15, 2018',
    section_id: 5,
    filename: './Electronics/mouse.jpg',
    description:
      'Apple Mouse perfect condition ',
    category: 'Electronics',
  },
  {
    product_name: 'Crash Bandicoot 2 Cortex Strikes Back Ps1 CIB',
    brand: 'Vitalii_Mamchuk',
    listing_date: 'November 3, 2016',
    section_id: 6,
    filename: './Books & Media/vidgame.jpg',
    //post body content
    description:
      'Playstation 1 game, Crash Bandcoot 2',
    category: 'Books & Media',
  },
  {
    product_name: 'The Concise ST. MARTINS Guide To Writing ',
    brand: 'Vitalii_Mamchuk',
    listing_date: 'November 3, 2016',
    section_id: 6,
    filename: './Books & Media/book.jpg',
    //post body content
    description:
      'The Concise ST. MARTINS Guide To Writing ',
    category: 'Books & Media',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
