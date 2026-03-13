//select all projects
const db = require("../config/db");
exports.getAllProjects = (callback) => {
    const query = "SELECT * FROM projects ORDER BY created_at DESC";
    db.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    })
};


//Select a project by ID
exports.getProjectById = (id, callback) => {
    const query = "SELECT * FROM projects WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
    });
};

//Create project
exports.createProject = (projectData, callback) => {
    const query = `
    INSERT INTO projects
    (title, description, image_url, project_url, github_url)
    VALUES (?, ?, ?, ?, ?)
    `;
    
    const value = [
        projectData.title,
        projectData.description,
        projectData.image_url,
        projectData.project_url,
        projectData.github_url
    ];

    db.query(query, values, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};