const { Post } = require('../models');

const postData = [
  {
    title: 'posting is fun',
    content: 'This is a fun post about cars.',
    user_id: 1
    
  },
  {
    title: 'my favorite workout',
    content: 'How to do bulgarian split squats.',
    user_id: 2
  },
  {
    title: 'The Last of us video game vs show',
    content: 'there were many differences between the two but all in all a good story',
    user_id: 3
  },
  {
    title: 'I love Pedro Pascal',
    content: 'Pedro is the hottest',
    user_id: 3
  },
  {
    title: 'Coffee vs tea',
    content: 'Coffee absolutley',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;