const path = require(`path`);
const express = require(`express`);
const app = express();
const port = 3000;
const funca = console.log("el localhost funciona en el puerto " + port);

app.set("view engine", "ejs");

app.listen(port, () => funca);

app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./src/views/index.html"));
});
app.get('/detalles', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./src/views/productDetails.html"));
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./src/views/productCart.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./src/views/login.html"));
});
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./src/views/register.html"));
});

// tipogrgrafias que selecionamos para usar

//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

//Palett colors 
//logo kolibry 
// violetas #791668   claro #9b0181
// beige #ffd49b      claro  #fff5e2

//npm i nodemon
//npx nodemon app
// Con el primer comando instalan el nodemon y con el segundo lo ejecutan, para que los cambios se carguen de forma inmediata a la pagina web apenas guarden los cambios, lo anoto por las dudas