const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// look at all post on server
router.get("/", async (req, res) => {
  try{  
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
  
    if (req.session.logged_in) {
      res.render("homepage", {
        posts,
        logged_in: req.session.logged_in,
      });
      return;
    } else {
      res.redirect("/login");
    }

  } catch (err) {
    res.status(500).json(err);
  }

});

// get the user's post
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await Post.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post, model: Comment, model: User}],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
    return;
  } else {
    res.render("login");
    return;
  }
});

module.exports = router;
