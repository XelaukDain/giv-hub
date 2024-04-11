const router = require('express').Router();
const { Section, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    
    const dbSectionData = await Section.findAll({
      include: [
        {
          model: Post,
          attributes: ['filename', 'description', 'category', 'listing_date'],
        },
      ],
    });
    
    // // NOTE: THIS IS ONLY FOR TESTING PURPOSES {
    // req.session.save(() => {
    //   // Set the 'loggedIn' session variable to 'true'
    //   req.session.loggedIn = true;
    // });
    // // }

    const sections = dbSectionData.map((section) =>
      section.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage',  {
      sections, loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/pricing', async (req, res) => {
  try {
    res.render('pricing', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// user profile GET



router.get('/profile', async (req, res) => {
  try {
    res.render('profile', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




router.get('/features', async (req, res) => {
  try {
    res.render('features', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/create', async (req, res) => {
  try {
    res.render('create', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one section
router.get('/section/:id', async (req, res) => {
  try {
    const dbSectionData = await Section.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'product_name',
            'brand',
            'listing_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const section = dbSectionData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'section' template
    res.render('section', { section, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/post/:id', async (req, res) => {
  try {
    const dbSectionData = await Section.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'product_name',
            'brand',
            'listing_date',
            'filename',
            'description',
            //addtions
            'category',
          ],
        },
      ],
    });

    const section = dbSectionData.get({ plain: true });
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    //Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('post', { post, section, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('user/login');
});

module.exports = router;