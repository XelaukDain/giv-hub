const router = require("express").Router();
const { Post } = require("../../models");

// CREATE new user
router.post("/post", async (req, res) => {
  try {
    const dbUserData = await Post.create({
      username: req.body.username,
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      story: req.body.story,
      type: req.body.type,
      image: req.body.image,
    });

    // Set up sessions with the 'loggedIn' variable
    req.session.save(() => {
      // Set the 'loggedIn' session variable to 'true'
      req.session.posted = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
