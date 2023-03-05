const path = require("path");

let productsController = {};

productsController.index = (req, res) => {
    return res.render("index");
};
productsController.cart = (req, res) => {
    return res.render("productCart");
};
productsController.details = (req, res) => {
    return res.render("productDetails");
};


module.exports = productsController;

//res.sendFile(path.resolve(__dirname,"./src/views/products/index.ejs"));

//    index: (req, res) => {
//    return res.render("index");
//    //res.sendFile(path.join(__dirname,"../views/products/index.ejs"));
//},
//cart: (req, res) => {
//    return res.render("productCart");
//    //res.sendFile(path.join(__dirname,"../views/products/productCart.ejs"));
//},
//details: (req, res) => {
//    return res.render("productDetails");
//    //res.sendFile(path.join(__dirname,"../views/products/productDetails.ejs"));
//}