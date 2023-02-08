const express = require("express");
const router = express.Router();
const {create,destroy,getAll,getOne,update} = require("../controllers/experience.controller");


router.get("/getAll", getAll);

router.get("/:id", getOne);

router.delete("/:id", destroy);

router.post("/create", create);

router.put("/:id", update);




module.exports = router;
