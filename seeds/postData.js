const Post = require('../models/Post');

const postData = require('./postData.json');

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;