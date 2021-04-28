const router = require("express").Router();
const { plantController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/create-plant", plantController.createPlant);
router.patch("/update-plant", plantController.updatePlant);
router.delete("/remove-plant", plantController.removePlant);

module.exports.plant = router;