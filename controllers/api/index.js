const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./userRoutes');
const sentenceRoutes = require('./userRoutes');


router.use('/user', userRoutes);
router.use('/sentence', sentenceRoutes);
router.use('/comment', commentRoutes);


module.exports = router;