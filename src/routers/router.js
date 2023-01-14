const express = require("express");
const router = express.Router();



const controler = require("../controllers/controler");

router.get("/", controler.users);
router.post("/", controler.newUser);
router.get("/:id", controler.user);
router.delete("/:id", controler.delUser);
router.put("/:id", controler.updateUser);

module.exports = router;