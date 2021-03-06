const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Look at specific post
router.get("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
              post_id: req.params.id,
            },
            include: {
                model: User,
            },
          });
    
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        const postData = await Post.findByPk(req.params.id, {
            include: [{  model: User }],
          });

        const post = postData.get({ plain: true });

        res.render("post", {
            comments,
            post,
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

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

    if (!postData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

module.exports = router;