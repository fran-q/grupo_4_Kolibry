const path = require("path");

let usersController = {};

usersController.login = (req, res) => {
    return res.render("login");
};
usersController.register = (req, res) => {
    return res.render("register");
};

module.exports = usersController;


//login: (req, res) => {
//    res.sendFile(path.join(__dirname,"../views/users/login.ejs"));
//},
//register: (req, res) => {
//    res.sendFile(path.join(__dirname,"../views/users/register.ejs"));
//}