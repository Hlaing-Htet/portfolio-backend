const express = require("express");
const controller = require("../controllers/homePage");
const router = express.Router();
const { updateFile } = require("../utils/gallery");

router.get("/", controller.getData);
router.post("/", controller.addData);

router.patch("/:id", controller.updateData);
router.patch("/:id/:fileName", updateFile, controller.updateData);

module.exports = router;
