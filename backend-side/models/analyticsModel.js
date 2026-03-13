const db = require("../config/db");

//Save a view
exports.trackVisit = (data, callback) => {
    const query = `
    INSERT INTO analytics
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