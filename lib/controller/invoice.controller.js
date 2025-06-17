const Invoice = require('../model/invoice.model');

const createInvoice = async (req, res) => {
await Invoice.create({
email: 'nathan@mail.com',
password: 'password',
});
res.render('invoice', { message: 'Invoice Created', user: null });
};

module.exports = {createInvoice};