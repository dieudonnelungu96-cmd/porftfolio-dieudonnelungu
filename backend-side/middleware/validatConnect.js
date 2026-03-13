//Check if the contact form has name, email, message
//Check if the contact form has name, email, message
module.exports = (req, res, next) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message ) {
        return res.status(400).json({
            success: false,
            message: "Name, email and message are required"
        });
    }

    //Validation email simple
    const emailRegex = /\S+@\S+\.\S+/;

    if(!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
    }

    next();
};