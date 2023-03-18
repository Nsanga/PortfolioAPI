const express = require("express");
const router = express.Router();
const {Register, Login, Profile, updateProfiles} = require("../controllers/auth.controller")
const authenticate = require('../middleware/auth')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/register', Register);
router.post('/login', upload.array('image', 3), Login)
router.get('/profile', authenticate, Profile)
router.put('/update/:id_User', upload.array('image', 3), updateProfiles) 



module.exports = router;
