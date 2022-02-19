const Comment = require('../models/Comment');

const commentData = require('./commentData.json');

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;