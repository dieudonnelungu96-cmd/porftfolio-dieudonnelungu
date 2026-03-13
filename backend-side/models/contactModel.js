let contact = [];

exports.create = (data) => {
    const newConctact = { id: contact.length + 1, ...data};
    contacts.push(newConctact);
    return;
};

exports.getAll = () => contacts;

const db = require("../config/db");

//create contact message
exports.createContact = (contactData, callback) => {
    const query = `
        INSERT INTO contacts (name, email, message)
        VALUES (?, ?, ?)
    `;

    const values = [
        contactData.name,
        contactData.email,
        contactData.message
    ];

    db.query(query, values, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });

};


//Get all messages
exports.getAllContacts = (callback) => {
    const query = "SELECT * FROM contacts ORDER BY created_at DESC";

    db.query(query, (err, results) =>{
        if (err) return callback(err, null);
        callback(null, results);
    });
};