const express = require("express");
const controller = require("../controllers/skills");
const router = express.Router();
const { saveFile, updateFile } = require("../utils/gallery");

router.get("/", controller.getSkills);
router.post("/", saveFile, controller.addSkill);
router.delete("/:id", controller.deleteSkill);
router.patch("/:id/:fileName", updateFile, controller.updateSkill);
router.patch("/:id", controller.updateSkill);

module.exports = router;
