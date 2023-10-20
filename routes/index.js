const {Router} = require("express");
const userController = require("../controlers/userControler");
const todoController = require("../controlers/todoControler");
const router = Router();

router.post("/user", userController.addUser);
router.post("/todo", todoController.addTodo);
router.get("/todo", todoController.getAll);

module.exports = router;
