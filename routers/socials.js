const express = require("express");
const controller = require("../controllers/socials");
const router = express.Router();
const { saveFile } = require("../utils/gallery");

router.get("/", controller.getSocials);
router.post("/", saveFile, controller.addSocial);

module.exports = router;
