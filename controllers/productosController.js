const Productos = require("../models/Productos");


exports.obtenerProducto = async(req, res)=>{
    res.status(404).json({msg:"obtener producto"});
};

exports.crearProducto = async(req, res)=>{
    try{
        const producto = new Productos(req, body);
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};

exports.actualizarProducto = async(req, res)=>{
    res.status(404).json({msg:"actualizar producto"});
};

exports.borrarProducto = async(req, res)=>{
    res.status(404).json({msg:"borrar producto"});
};