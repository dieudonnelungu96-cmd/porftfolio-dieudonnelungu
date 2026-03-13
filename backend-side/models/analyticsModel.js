let projectViews = [
    { projectId: 1, views: 0 },
    { projectId: 2, views: 0 }
];

exports.getAll = () => projectViews;

exports.increment = (projectId) => {
    const project = projectViews.find(p => p.projectId == projectId);
    if (!project) return null;
    project.views += 1;
    return project;
};


const db = require("../config/db");

//Save a view
exports.trackVisit = (data, callback) => {
    const query = `
    INSERT TO analytics
    (ip_address, user_agent, page_visited)
    VALUES (?, ?, ?)
    `;

    const values = [
        data.ip_address,
        data.user_agent,
        data.page_visited
    ];

    db.query(query, values, (err, result) => {
        if (err) return callback(err, null);
        
        callback(null, result);
    });

};

exports.getAnalytics = (callback) => {
    const query = "SELECT * FROM analytics ORDER BY visit_time DESC";

    db.query(query, (err, results) => {
        if (err) return callback(err, null);

        callback(null, results);
    });
};