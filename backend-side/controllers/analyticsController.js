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