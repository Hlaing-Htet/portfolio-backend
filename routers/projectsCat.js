const express = require("express");
const controller = require("../controllers/projectsCat");
const router = express.Router();

router.get("/", controller.getCats);
router.post("/", controller.addCat);
router.patch("/:id", controller.updateCat);
router.delete("/:id", controller.deleteCat);

module.exports = router;
