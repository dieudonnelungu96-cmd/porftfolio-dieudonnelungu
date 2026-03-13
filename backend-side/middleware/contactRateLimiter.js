const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many messages sent. Try again later."

});

module.exports = contactLimiter;