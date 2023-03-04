const path = require("path");

let usersController = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/users/login.ejs"));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/users/register.ejs"));
    }
};

module.exports = usersController;