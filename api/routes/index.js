var express = require("express");
var router = express.Router();
const authenticate = require('../middleware/auth')


// require portfolio routes
const competenceRoutes = require("./competence.route");
const educationRoutes = require("./education.route");
const experienceRoutes = require("./experience.route");
const logicielRoutes = require("./logiciel.route");
const projetRoutes = require("./projet.route");
const realisationRoutes = require("./realisation.route");
const serviceRoutes = require("./service.route");
const authRoutes = require('./auth.route')



// portfolio route operations
router.use("/competence", competenceRoutes);
router.use("/education", educationRoutes);
router.use("/experience", experienceRoutes);
router.use("/logiciel", logicielRoutes);
router.use("/projet", authenticate, projetRoutes);
router.use("/realisation", realisationRoutes);
router.use("/service", serviceRoutes);
router.use("/auth", authRoutes)


module.exports = router;
