const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Routes import
const projectsRoutes = require("./routes/projectsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./admin-dashboard/routes/adminRoutes");

app.use("/api/admin", adminRoutes);

//Global Middlewares
app.use(cors());
app.use(express.json());

//API routes
app.use("/api/projects", projectsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/analytics", analyticsRoutes);

//Route test
app.get("/", (req, res) => {
    res.send("Portofolio backend API is running...");
});

//Port
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})