let exppress = require("express");
let router = exppress.Router();
let usersController = require("../controllers/usersController.js");

router.get("/login", usersController.login);
router.get("/register", usersController.register);

module.exports = router;