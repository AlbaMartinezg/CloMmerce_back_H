const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema({
    nombre: {type: String, required:true, trim: true }, //trim es para borrar espacios
    imagen: {type: String, required:true, trim: true },
    creador:{type:mongoose.Schema.Types.ObjectId, ref:"Usuario"},
    creado: {type: Date, default:Date.now()},

});


//definir el modelo 
module.exports = mongoose.model("categorias", CategoriasSchema);
