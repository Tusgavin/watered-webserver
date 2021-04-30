const router = require("express").Router();
const { userController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/user-info", userController.getUser);
router.patch("/update-user", userController.updateUser);
router.delete("/autodelete-user", userController.autodeleteUser);

module.exports.user = router;