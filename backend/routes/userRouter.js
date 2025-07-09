const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/userController")
const {homepage} = require("../controllers/studentcontroller")
const authmiddleware = require("../middleware/authmiddleware")
const checkRole = require("../middleware/checkRole")
router.post("/register",register)
router.post("/login",login)
router.get("/home",authmiddleware,checkRole("admin"),homepage)

module.exports = router