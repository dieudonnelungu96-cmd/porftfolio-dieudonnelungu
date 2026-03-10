const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Route test
app.get("/", (req, res) => {
    res.send("Portofolio backend API is running...");
});

//Port
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const projectsRoutes = require("./routes/projectsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

//Middleware
app.use("/api/projects", projectsRoutes);
app.user("/api/contact", contactRoutes);
app.user("/api/analytics", analyticsRoutes);