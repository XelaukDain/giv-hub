const router = require("express").Router();
const { Post } = require("../../models");
const multer = require("multer");

// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/" + type); // Specify the directory where you want to store the uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for the uploaded image
  },
});

// Create an instance of multer with the storage engine
const upload = multer({ storage: storage });

// CREATE new user
router.post("/post", upload.array("image"), async (req, res) => {
  try {
    // Get the path of the uploaded image
    const imagePath = req.file.path;

    const dbUserData = await Post.create({
      username: req.body.username,
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      story: req.body.story,
      type: req.body.type,
      image: imagePath,
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
