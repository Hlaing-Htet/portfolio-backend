const express = require("express");
const controller = require("../controllers/music");
const router = express.Router();
const { saveFile, updateFile } = require("../utils/music");

router.get("/", controller.getMusics);
router.post("/", saveFile, controller.addMusic);
router.delete("/:id", controller.deleteMusic);
router.patch("/:id/:fileName", updateFile, controller.updateMusic);
router.patch("/:id", controller.updateMusic);

module.exports = router;
