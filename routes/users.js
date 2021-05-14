// Need these 3 of (4) below ------------------------
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// --------------------------------------------------

router.get('/', ctrl.users.index);

router.get('/signup', ctrl.users.signup);

router.post('/signup', ctrl.users.createUser);

router.get('/profile/:id', ctrl.users.show);

// Need this last 4 of (4)---------------------------

module.exports = router;