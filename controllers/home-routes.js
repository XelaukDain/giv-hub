const router = require('express').Router();
const { Section, Job } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    
    const dbSectionData = await Section.findAll({
      include: [
        {
          model: Job,
          attributes: ['filename', 'description', 'type_of_job', 'start_date'],
        },
      ],
    });

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

// GET one gallery
router.get('/section/:id', async (req, res) => {
  try {
    const dbSectionData = await Section.findByPk(req.params.id, {
      include: [
        {
          model: Job,
          attributes: [
            'id',
            'title',
            'technician',
            'start_date',
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
router.get('/job/:id', async (req, res) => {
  try {
    const dbSectionData = await Section.findByPk(req.params.id, {
      include: [
        {
          model: Job,
          attributes: [
            'id',
            'title',
            'technician',
            'start_date',
            'filename',
            'description',
            //addtions
            'type_of_job',
          ],
        },
      ],
    });

    const section = dbSectionData.get({ plain: true });
    const dbJobData = await Job.findByPk(req.params.id);

    const job = dbJobData.get({ plain: true });
    //Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('job', { job, section, loggedIn: req.session.loggedIn });
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
  res.render('login');
});

module.exports = router;
