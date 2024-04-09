const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_name
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // brand
    technician: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // listing_date
    start_date: {
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
    type_of_job: {
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
    modelName: 'job',
  }
);

module.exports = Job;
