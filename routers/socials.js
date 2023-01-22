const express = require("express");
const controller = require("../controllers/socials");
const router = express.Router();
const { saveFile } = require("../utils/gallery");

router.get("/", controller.getSocials);
router.post("/", saveFile, controller.addSocial);
router.delete("/:id", controller.deleteSocial);

module.exports = router;
