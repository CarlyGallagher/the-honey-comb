const { User } = require('../models');

const userData = [
  {
    username: 'test12',
    password: 'test123456'
    
  },
]

const seedUsers = () => User.bulkcreate(userData);

module.exports = seedUsers;
