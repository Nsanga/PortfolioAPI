const express = require("express");
const router = express.Router();
const {Register, Login, Profile, updateProfiles} = require("../controllers/auth.controller")
const authenticate = require('../middleware/auth')

router.post('/register', Register);
router.post('/login', Login)
router.get('/profile', authenticate, Profile)
router.put('/update/:id_User', updateProfiles) 



module.exports = router;
