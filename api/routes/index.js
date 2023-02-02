var express = require("express");
var router = express.Router();

// require todo routes
const todoRoutes = require("./todo.route");




// todo route operations
router.use("/todo", todoRoutes);


module.exports = router;
