const Productos = require("../models/Productos");


exports.obtenerProductosHome = async ( req, res) => {
    try{
        const productos = await Productos.find();

        res.json({ productos});
    }catch(error){
        console.log(error);
    }
};

exports.obtenerProducto = async(req, res)=>{
    const {id} = req.params
    const productos = await Productos.find().where("categoriaId").equals(id)
    res.json(productos);
   
 };

 
exports.crearProducto = async(req, res)=>{
    try{
        const productos = new Productos(req.body);
        productos.save();
        res.json(productos);
    }catch(error){
        console.log(error);
    }
};


exports.actualizarProducto = async ( req, res) => {
    const { id } = req.params;
    const producto = await Categorias.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "Producto no encontrado"});
    }
    if(producto.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg : "Acción no válida para este ususario"});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.descripcion = req.body.descripcion || categoria.decripcion;
    categoria.stock = req.body.stock || categoria.stock;
    categoria.precio = req.body.precio || categoria.precio;    
    categoria.imagen = req.body.imagen || categoria.imagen;
    categoria.save();

    res.json({ producto});

   
};

exports.borrarProducto = async(req, res)=>{
    try{
        await Categorias.deleteOne({ _id: req.params.id});
        res.json({ msg: "Producto eliminado con éxito"});
    }catch(error){
        console.log(error);
    }
};