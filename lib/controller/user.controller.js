const User = require('../model/user.model');

const createUser = async (req, res) => {
await User.create({
email: 'nathan@mail.com',
password: 'password',
});
res.render('user', { message: 'User Created', user: null });
};

module.exports = {createUser};