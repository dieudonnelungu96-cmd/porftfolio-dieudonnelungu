//Projects routes
const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController");

//GET all projects
router.get("/", projectsController.getAllProjects);

//GET single project by ID
router.get("/:id", projectsController.getProjectById);

//POST new project
router.get("/", projectsController.createProject);

module.exports = router;