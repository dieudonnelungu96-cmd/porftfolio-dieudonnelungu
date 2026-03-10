const Project = require("../models/projectsModel");

//Get all projects
exports.getAllProjects = (req, res) => {
    const projects = Project.getAll();//temporaire, je dois me referer au modele
    res.json(projects);
};

//Get single project by Id
exports.getAllProjects = (req, res) => {
    const project = Project.getProjectById(req.params.id);
    if (!project) return res.status(404).JSON({ message: "Project not found"});
};

// Create new project
exports.createProject = (req, res) => {
    const newProject = Project.create(req.body);
    res.status(201).json(newProject);
};