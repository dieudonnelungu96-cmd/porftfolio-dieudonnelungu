const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const adminAuth = require("../../backend-side/middleware/authMiddleware");


//Secure admin Dashboard
router.get("/dashboard", adminAuth, adminController.getDashboard);


module.exports = router;