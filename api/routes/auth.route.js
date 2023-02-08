const express = require("express");
const router = express.Router();
const {Register, Login, Profile} = require("../controllers/auth.controller")
const authenticate = require('../middleware/auth')

router.post('/register', Register);
router.get('/login', Login)
router.get('/profile', authenticate, Profile)



module.exports = router;
