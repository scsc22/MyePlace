// controllers/postController.js

const { Post, User } = require('../models');

const postController = {
  // Create a new blog post
  createPost: async (req, res) => {
    try {
      const postData = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update an existing blog post
  updatePost: async (req, res) => {
    try {
      const postData = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: { id: req.params.id, user_id: req.session.user_id },
        }
      );

      if (!postData[0]) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }

      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete an existing blog post
  deletePost: async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: { id: req.params.id, user_id: req.session.user_id },
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }

      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = postController;
