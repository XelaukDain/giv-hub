const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // brand
    brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // listing_date
    listing_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // img
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // product description
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    section_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'section',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;