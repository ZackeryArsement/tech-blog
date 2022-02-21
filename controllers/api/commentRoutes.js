const router = require("express").Router();
const {  Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Create new comment
router.post("/" , withAuth, async (req, res) => {
    try {
        console.log(req.params.id)
        const newPost = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
    
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });

module.exports = router;
