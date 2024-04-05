const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipient: {
        
        type: DataTypes.STRING,
        allowNull: false,
        },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    convo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'convo',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

module.exports = Message;
