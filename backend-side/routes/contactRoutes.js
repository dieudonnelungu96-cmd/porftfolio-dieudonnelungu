const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const validationContact = require("../middleware/validatConnect");

const contactLimiter = require("../middleware/contactRateLimiter");

router.post("/", contactLimiter, contactController.createContact);

//POST contact form submission
router.post("/", contactController.submitContactForm);
router.post("/", validationContact, contactController.submitContactForm);

//GET all contacts (admin)
router.get("/", contactController.getAllContacts);

module.exports = router;

