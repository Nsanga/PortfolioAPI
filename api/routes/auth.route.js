const express = require("express");
const router = express.Router();
const {Register, Login, Profile} = require("../controllers/auth.controller")
const authenticate = require('../middleware/auth')

router.post('/register', Register);
router.post('/login', Login)
router.get('/profile', authenticate, Profile)



module.exports = router;
