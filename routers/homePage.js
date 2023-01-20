const express = require("express");
const controller = require("../controllers/homePage");
const router = express.Router();
const { saveFile } = require("../utils/gallery");

router.get("/", controller.getData);
router.post("/", controller.addData);

router.patch("/:id", saveFile, controller.updateData);

module.exports = router;
