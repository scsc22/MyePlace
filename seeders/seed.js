// Import your models
const { User, Post, Comment } = require('../models'); // Adjust the path based on your project structure

// Seed function
const seedDatabase = async () => {
  // Seed users
  const users = await User.bulkCreate([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ]);

  // Seed posts
  const posts = await Post.bulkCreate([
    { title: 'Post 1', content: 'Content for post 1', user_id: users[0].id },
    { title: 'Post 2', content: 'Content for post 2', user_id: users[1].id },
    // Add more posts as needed
  ]);

  // Seed comments
  await Comment.bulkCreate([
    { comment_text: 'Comment on post 1', user_id: users[1].id, post_id: posts[0].id },
    { comment_text: 'Comment on post 2', user_id: users[0].id, post_id: posts[1].id },
    // Add more comments as needed
  ]);

  console.log('Seed data inserted successfully.');
};

// Run the seed function
seedDatabase();
