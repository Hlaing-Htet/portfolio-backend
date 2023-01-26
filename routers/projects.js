const express = require("express");
const controller = require("../controllers/projects");
const router = express.Router();
const { saveFile, updateFile } = require("../utils/gallery");

router.get("/", controller.getprojects);
router.get("/:catId", controller.getprojectsByCat);
router.post("/", saveFile, controller.addproject);
router.delete("/:id", controller.deleteproject);
router.patch("/:id/:fileName", updateFile, controller.updateproject);
router.patch("/:id", controller.updateproject);

module.exports = router;
