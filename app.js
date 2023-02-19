const path = require(`path`);
const express = require(`express`);
const app = express();
const port = 3000;
const funca = console.log("el localhost funciona en el puerto " + port);

app.use(express.static("./public"));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});
app.get('/detalles', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/productDetails.html"));
});
app.listen(port, () => funca);
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});

//npm i nodemon
//npx nodemon app
// Con el primer comando instalan el nodemon y con el segundo lo ejecutan, para que los cambios se carguen de forma inmediata a la pagina web apenas guarden los cambios, lo anoto por las dudas