const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

//Track visit
router.post("/", analyticsController.trackVisit);

//PGET Analytics
router.get("/", analyticsController.getAnalytics);

module.exports = router;