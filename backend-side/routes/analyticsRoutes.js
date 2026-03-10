const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

//GET analytics for all projects form
router.get("/projects", analyticsController.getCProjectViews);

//POST increment project view
router.get("/projects/:id", analyticsController.incrementProjectView);

module.exports = router;