const { Router } = require("express");
const userControler = require("../controlers/userControler");
const router = Router();

router.post("/user", userControler.addUser);

module.exports = router;
