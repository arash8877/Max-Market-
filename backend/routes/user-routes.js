const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controllers");


router.post("/register", userControllers.register);

module.exports = router;
