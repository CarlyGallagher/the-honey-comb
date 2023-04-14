const { User } = require('../models');

const userData = [
  {
    username: 'carlyjgally',
    password: 'test1'
    
  },
  {
    username: 'cjgally',
    password: 'test2'
  },
  {
    username: 'king',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;