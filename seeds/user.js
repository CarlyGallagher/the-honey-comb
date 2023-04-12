const { User } = require('../models');

const userData = 
    {
        username: 'test12',
        password: 'test123456'
        
      };

const seedUsers = () => User.create(userData);

module.exports = seedUsers;