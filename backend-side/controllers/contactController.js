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


const contactModel = require("../models/contactModel");


//CREATE CONTACT MESSAGE
exports.createContact = (req, res) => {

    const contactData = req.body;

    contactModel.createContact(contactData, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur envoi message",
                error: err
            });
        }

        res.status(201).json({
            message: "Message envoyé avec succès"
        });

    });

};



//GET ALL CONTACTS (ADMIN)
exports.getAllContacts = (req, res) => {

    contactModel.getAllContacts((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur récupération messages",
                error: err
            });
        }

        res.status(200).json(results);

    });

};