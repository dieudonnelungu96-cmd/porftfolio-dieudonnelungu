const db = require("../../config/db");

exports.getDashboardStats = (callback) => {

    const stats = {};

    const queries = [
        "SELECT COUNT(*) AS totalProjects FROM projects",
        "SELECT COUNT(*) AS totalContacts FROM contacts",
        "SELECT COUNT(*) AS totalVisits FROM analytics"
    ];

    db.query(queries[0], (err, projectResult) => {

        if (err) return callback(err);

        stats.projects = projectResult[0].totalProjects;

        db.query(queries[1], (err, contactResult) => {

            if (err) return callback(err);

            stats.contacts = contactResult[0].totalContacts;

            db.query(queries[2], (err, visitResult) => {

                if (err) return callback(err);

                stats.visits = visitResult[0].totalVisits;

                callback(null, stats);

            });

        });

    });

};