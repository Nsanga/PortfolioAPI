const express = require("express");
const router = express.Router();
const {create,destroy,getAll,getOne,update} = require("../controllers/todo.controller");


router.get("/getAll", getAll);

router.get("/:todoId", getOne);

router.delete("/:todoId", destroy);

router.post("/create", create);

router.put("/:todoId", update);




module.exports = router;
