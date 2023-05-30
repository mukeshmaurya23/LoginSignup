const express = require("express");
const router = express.Router();

const { userSignup, userLogin, userDetails } = require("../controllers/user");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/userdetails", userDetails);
module.exports = router;
