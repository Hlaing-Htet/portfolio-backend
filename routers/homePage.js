const express = require("express");
const controller = require("../controllers/homePage");
const router = express.Router();

router.get("/", controller.getData);
router.post("/", controller.addData);

router.route("/:id").patch(controller.updateData);

module.exports = router;
