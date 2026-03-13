const Analytics = require("../models/analyticsModel");
//Get all projects views
exports.getCProjectViews = (req, res) => {
    const views = Analytics.getAll();
    res.json(views);
};

//Increment view count for a project
exports.incrementProjectView = (req, res) => {
    const udpadted = Analytics.increment(req.params.id);
    if (!udpadted) return res.status(404).json({ message: "Project not found" });
    res.json(udpadted);
};

const analyticsModel = require("../models/analyticsModel");


//TRACK VISIT
exports.trackVisit = (req, res) => {

    const data = {

        ip_address: req.ip,
        user_agent: req.headers["user-agent"],
        page_visited: req.body.page

    };

    analyticsModel.trackVisit(data, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur tracking visite",
                error: err
            });
        }

        res.status(201).json({
            message: "Visite enregistrée"
        });

    });

};

//GET ANALYTICS
exports.getAnalytics = (req, res) => {

    analyticsModel.getAnalytics((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Erreur récupération analytics",
                error: err
            });
        }

        res.status(200).json(results);

    });

};