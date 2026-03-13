//Middleware/Simple authentication, check the key admin is shared in headers
modules.exports = (req, res, next) => {
    const adminKey = req.headers["x-admin-key"];

    //Saved key admin in  .env
    if (adminKey !== ProcessingInstruction.env.ADMIN_KEY){
        return res.status(401).json({
            succes: false,
            message: "Unauthorized access"
        });
    }
    next();
};

require("dotenv").config();

module.exports = (req, res, next) => {

    const adminKey = req.headers["x-admin-key"];
    const adminPassword = req.headers["x-admin-password"];

    if (!adminKey || !adminPassword) {
        return res.status(401).json({
            message: "Admin credentials required"
        });
    }

    if (
        adminKey !== process.env.ADMIN_KEY ||
        adminPassword !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(403).json({
            message: "Access denied"
        });
    }

    next();
};