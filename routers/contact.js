const express = require("express");
const controller = require("../controllers/contact");
const router = express.Router();

router.get("/", controller.getContacts);
router.post("/", controller.addContact);
router.patch("/:id", controller.updateContact);
router.delete("/:id", controller.deleteContact);

module.exports = router;
