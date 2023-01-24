const express = require("express");
const controller = require("../controllers/socials");
const router = express.Router();
const { saveFile, updateFile } = require("../utils/gallery");

router.get("/", controller.getSocials);
router.post("/", saveFile, controller.addSocial);
router.delete("/:id", controller.deleteSocial);
router.patch("/:id/:fileName", updateFile, controller.updateSocial);
router.patch("/:id", controller.updateSocial);

module.exports = router;
