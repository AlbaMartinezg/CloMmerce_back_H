const Categorias = require("../models/Categorias");
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

exports.actualizarCategoria = async ( req, res) => {
    const { id } = req.params;
    const categoria = await Categorias.findById(id);

    if(!categoria){
        return res.status(400).json({ msg: "categoria no encontrada"});
    }
    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg : "acción no válida para este ususario"});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.imagen = req.body.imagen || categoria.imagen;
    categoria.save();

    res.json({ categoria});

};

exports.actualizarProducto = async ( req, res) => {
    const { id } = req.params;
    const productos = await Categorias.findById(id);

    if(!productos){
        return res.status(400).json({ msg: "Producto no encontrado"});
    }
    if(productos.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg : "Acción no válida para este ususario"});
    }

    productos.nombre = req.body.nombre || productos.nombre;
    productos.descripcion = req.body.descripcion || productos.decripcion;
    productos.stock = req.body.stock || productos.stock;
    productos.precio = req.body.precio || productos.precio;    
    productos.imagen = req.body.imagen || productos.imagen;
    productos.save();

    res.json({ productos});

   
};

exports.borrarProducto = async(req, res)=>{
    try{
        await Categorias.deleteOne({ _id: req.params.id});
        res.json({ msg: "Producto eliminado con éxito"});
    }catch(error){
        console.log(error);
    }
};