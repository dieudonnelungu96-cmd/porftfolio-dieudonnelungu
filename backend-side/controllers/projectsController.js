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

const projectModel = require("../models/projectsModel");


//GET ALL PROJECTS
exports.getAllProjects = (req, res) => {

    projectModel.getAllProjects((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur récupération projets",
                error: err
            });
        }

        res.status(200).json(results);

    });

};



//GET PROJECT BY ID
exports.getProjectById = (req, res) => {

    const id = req.params.id;

    projectModel.getProjectById(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur récupération projet",
                error: err
            });
        }

        if (!result) {
            return res.status(404).json({
                message: "Projet non trouvé"
            });
        }

        res.status(200).json(result);

    });

};


//CREATE PROJECT
exports.createProject = (req, res) => {

    const projectData = req.body;

    projectModel.createProject(projectData, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur création projet",
                error: err
            });
        }

        res.status(201).json({
            message: "Projet créé avec succès",
            projectId: result.insertId
        });

    });

};