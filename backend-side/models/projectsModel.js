let projects = [
    { id: 1, name: "PAO Website", description: "Official website of Minister of Labour and Employment, DR Congo" },
    { id: 2, name: "Portfolio-dieudonnelungu", description: "A Full Stack portfolio" }
];
exports.getAll = () => projects;
exports.getById = (id) => projects.find(p => p.id == id);
exports.create = (data) => {
    const newProject = { id: projects.length + 1, ...data };
    projects.push(newProject);
    return newProject;
}
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
    VALUE (?, ?, ?, ?, ?)
    `;
    
    const value = [
        projectData.title,
        projectData.description,
        projectData.image_url,
        projectData.project_url,
        projectData.github_url
    ];

    db.query(query, CSSFontFeatureValuesRule, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};
