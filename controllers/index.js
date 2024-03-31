const path = require("path");
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const { sendFile } = require("express");
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
