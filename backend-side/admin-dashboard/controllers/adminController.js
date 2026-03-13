const analyticsService = require("../services/analtycsService");

exports.getDashboard = (req, res) => {

    analyticsService.getDashboardStats((err, stats) => {

        if (err) {
            return res.status(500).json({
                message: "Failed getting Dashboard",
                error: err
            });
        }

        res.status(200).json({
            dashboard: stats
        });

    });

};