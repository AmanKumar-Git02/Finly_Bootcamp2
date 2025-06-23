const User = require('../model/user.model');

// const createUser = async (req, res) => {
// await User.create({
// email: 'nathan@mail.com',
// password: 'password',
// });
// res.render('user', { message: 'User Created', user: null });
// };


// //find one user
// const getUser = async (req, res) => {
// const user = await User.findOne({ email: 'nathan@mail.com' });
// console.log(user);
// res.send("User Retrieved Successfully");
// // res.render('user', { message: 'User Retrieved', user: user });
// };

// const deleteUser = async (req, res) => {
//     res.send('Delete User placeholder'); // implement logic later
// };

const { body, validationResult } = require('express-validator');

// const signup = async (req, res) => {
// const { email, password } = req.body;
// const existingUser = await User.findOne({email: email});
// if (existingUser) {
// // Email already exists
// return res.status(400).json({message: 'User already exists'});
// } else {
// const hashedPassword = await bcrypt.hash(password, 10);
// const user = {
// email,
// password: hashedPassword,
// };
// const result = await User.create(user);
// req.session.userId = result._id;
// res.redirect('/dashboard');
// }
// };

const signup = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array();
    req.flash('errors', errors);
    req.flash('data', req.body);
    return res.redirect('/signup');
  }

  const { email, password } = req.body;
  const query = { email };
  const existingUser = await User.findOne(query);

  if (existingUser) {
    req.flash('data', req.body);
    req.flash('info', {
      message: 'Email is already registered. Try to login instead',
      type: 'error'
    })
    res.redirect('/signup');
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      email,
      password: hashedPassword,
    };
    const result = await User.create(user);
    req.session.userId = result._id;
    req.flash('info', {
      message: 'Signup Successful',
      type: 'success'
    });
    res.redirect('/dashboard');
  }
};

// module.exports = {createUser, getUser, deleteUser};
module.exports = {signup};