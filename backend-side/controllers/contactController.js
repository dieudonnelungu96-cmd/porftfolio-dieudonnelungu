const Contact = require("../models/contactModel");
//Submit contact form
exports.submitContactForm = (req, res) => {
    const contact = Contact.create(req.body);
    res.status(201).json({ message: "Message sent", data: contact});
};

//Get all conctacts
exports.getAllContacts = (req, res) => {
    const conctacts = Contact.getAll();
    res.json(conctacts);
};