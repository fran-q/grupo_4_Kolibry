let exppress = require("express");
let router = exppress.Router();
let productosController = require("../controllers/productsController.js");

router.get("/", productosController.index);
router.get("/details", productosController.details);
router.get("/cart", productosController.cart);