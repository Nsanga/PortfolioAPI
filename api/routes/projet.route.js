const express = require("express");
const router = express.Router();
const {create,destroy,getAll,getOne,update} = require("../controllers/projet.controller");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.get("/getAll", getAll);

router.get("/:id", getOne);

router.delete("/:id", destroy);

router.post("/create", upload.single('image'), create);

router.put("/:id", upload.single('image'), update);




module.exports = router;
