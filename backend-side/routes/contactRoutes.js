const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const validationContact = require("../middleware/validatConnect");

const contactLimiter = require("../middleware/contactRateLimiter");

//POST contact form submission
router.post("/", contactLimiter, validationContact, contactController.createContact);

//GET all contacts (admin)
router.get("/", contactController.getAllContacts);

module.exports = router;

