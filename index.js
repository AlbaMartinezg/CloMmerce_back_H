const express = require("express");
const conectarDB = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes")
const categoriasRoutes = require("./routes/categoriasRoutes")
const productosRoutes = require("./routes/productosRoutes")
const auth = require("./routes/auth")
const cors = require("cors");


//// acá se debe instalar la libreria 1- npm init enseguida 2- npm i express 3- npm i -D nodemon 4. npm i mongoose  5- npm i bcryptjs
//buscar controlador de línea

const app = express();
app.use(express.json({extended:true}));

conectarDB();
// se debe habilitar esta libreria dentro del back  npm i cors, cuando estamos conectando back y front
app.use(cors());


//rutas
//acá hacemos la conexión para los llamados, si esto falta no funciona postman
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth);
app.use("/api/productos", productosRoutes);
app.use("/api/categorias", categoriasRoutes);

app.listen(5000, ()=>{
    console.log("Levantamos servidor en Puerto 5000, conectando con el Front");
});
// desde acá hacemos todo los de mongo DB