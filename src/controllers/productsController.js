const path = require("path");

let productsController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/products/index.ejs"));
    },
    cart: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/products/productCart.ejs"));
    },
    details: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/products/productDetails.ejs"));
    }
};

module.exports = productsController;

//res.sendFile(path.resolve(__dirname,"./src/views/products/index.ejs"));