const Customer = require('../model/customer.model');

const createCustomer = async (req, res) => {
await Customer.create({
email: 'nathan@mail.com',
password: 'password',
});
res.render('customer', { message: 'Customer Created', user: null });
};

module.exports = {createCustomer};