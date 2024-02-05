var express = require('express');
var router = express.Router();
const {register,login} = require("../controllers/auth.controller");


router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
