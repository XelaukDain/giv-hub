//work in progress

const { Message } = require('../models');

const messageData = [
    {
        sender: 'User1',
        recipient: 'User2',
        date: new Date(),
        filename: 'example.jpg',
        content: 'Hello User2!',
      },
      {
        sender: 'User2',
        recipient: 'User1',
        date: new Date(),
        filename: 'example2.jpg',
        content: 'Hi User1!',
      },
  ];
  
  const seedMessage = () => Message.bulkCreate(messageData);
  
  module.exports = seedMessage;