const router = require("express").Router();
const { authController } = require("../controllers");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports.auth = router;