// Need these 3 of (4) below ------------------------
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// --------------------------------------------------

router.get('/profile', ctrl.users.index);

router.get('/signup', ctrl.users.signup);


// Need this last 4 of (4)---------------------------

module.exports = router;