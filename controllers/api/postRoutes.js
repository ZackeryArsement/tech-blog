const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Look at specific post
router.post("/:id", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
        });
    
        const user = userData.get({ plain: true });
    
        res.render("sentence", {
        ...user,
        logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });

router.post("/new/:id" , withAuth, async (req, res) => {
try {
    const newPost = await Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.body.user_id,
    });

    res.status(200).json(newPost);
} catch (err) {
    console.log(err);
    res.status(400).json(err);
}
});

module.exports = router;