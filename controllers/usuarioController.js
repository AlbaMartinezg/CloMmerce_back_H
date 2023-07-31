const Usuario = require("../models/Usuarios");
const bcrytjs = require("bcryptjs");


exports.crearUsuario = async(req, res) =>{
    //console.log(req.body); //se deja sin comentar solo si queremos ver en la terminal de visual
    const {password, email}= req.body;

    try{
        //revisar que sea un unico usuario registrado
        let usuario = await Usuario.findOne({email});
        if (usuario){
            return res.status(404).json({msg:"El usuario ya existe"});
        }
        
        //crear nuevo usuario
        usuario = new Usuario(req.body);
        //hash
        usuario.password = await bcrytjs.hash(password, 10);
    
        //guardar en DB Mongo
        const usuarioAlmacenado = await usuario.save();

        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error)
    }

};