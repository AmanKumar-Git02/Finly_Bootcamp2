const express = require('express');
const router = express.Router();

const {createUser, getUser, deleteUser} = require('../lib/controller/user.controller');

router.post('/createusers', createUser);
router.get('/getUser', getUser);
router.get('/deleteUser', deleteUser);

router.get('/', (req, res) => {
res.send('user route is working');
});

router.get('/login', (req, res) => {
res.send('login route is working');
});

router.get('/signup', validateSignup, (req, res) => {
  res.render('pages/signup', {
    title: 'Sign up',
    user: req.flash('data')[0],
    info: req.flash('info')[0],
    errors: req.flash('errors'),
  });
});

router.post('/signup', validateSignup, (req, res) => {
res.send('signup route is working');
});


module.exports = router;