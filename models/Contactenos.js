const mongoose = require("mongoose");

const ContactenosSchema = mongoose.Schema({
    nombre: {type: String, required:true, trim: true }, //trim es para borrar espacios
    email: {type: String, required:true, trim: true, unique:true },
    telefono: {type: String, required:true, trim: true }, //trim es para borrar espacios
    mensaje: {type: String, required:true, trim: true }, //trim es para borrar espacios
    creado: {type: Date, default:Date.now()},

});


//definir el modelo 
module.exports = mongoose.model("contactenos", CategoriasSchema);
