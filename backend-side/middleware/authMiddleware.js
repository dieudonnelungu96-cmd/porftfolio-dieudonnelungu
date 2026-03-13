//Middleware/Simple authentication, check the key admin is shared in headers
require("dotenv").config();
modules.exports = (req, res, next) => {
    const adminKey = req.headers["x-admin-key"];

    //Saved key admin in  .env
    if (adminKey !== process.env.ADMIN_KEY){
        return res.status(401).json({
            succes: false,
            message: "Unauthorized access"
        });
    }
    next();
};