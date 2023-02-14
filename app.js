const path = require(`path`);
const express = require(`express`);
const app = express();
const port = 3000;
const funca = console.log("el localhost funciona en el puerto " + port);

app.listen(port, () => funca); 

