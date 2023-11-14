// controllers/commentController.js

const { Comment, User } = require('../models');

const commentController = {
  // Create a new comment
  createComment: async (req, res) => {
    try {
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = commentController;
