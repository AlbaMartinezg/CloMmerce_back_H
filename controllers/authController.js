const Usuario = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path:"variables.env"});

// acá se debe instalar la libreria de npm i bcryptjs

// si todo es correcto : crear y firmar un token

// importar libreria jwt require jsonwebtoken para usar los web token

//instalar libreria npm i jsonwebtoken para usar los web token
//se instala otra dependencia de desarrollo // npm i dotenv // sin palabras secretas no se pueden firmar los token
exports.autenticarUsuario = async(req, res)=>{

    const {password, email} = req.body;
    //todos usan el try{}catch(){}

    try{
        //revisar que sea un usuario registrado
        let usuario = await Usuario.findOne({email});

        if (!usuario){
            return res.status(404).json({msg:"El usuario NO existe"});
        }
        //REVISAR EL PASSWORD
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password)
        
        if(!passwordCorrecto){
            return res.status(400).json({msg:"¡El usuario o la contraseña son incorrectos!. Intentalo de nuevo!"});
        }
        //console.log("Usuario ingresó correctamante");

        // si todo es correcto : crear y firmar un token

        const payload = {
            usuario: { id: usuario.id},
        };
        //res.json(payload);
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn:'30d',//1 hora
                // cuando se hace testing en postman se debe colocar la key (x-auth-token) y el token generado en el postman 
                //para generar el token se hace con post de auth y el usuario(email) y contraseña
            },
            (error, token)=>{
                if(error) throw error;
                //Mensaje de confirmación
                res.json({token});
            }
        );
        // instalar libreria npm i jsonwebtoken para usar los web token
    }catch(error){
        console.log(error);
    }
}

exports.usuarioAutenticado = async(req, res)=>{
    try{
        const usuario = await Usuario.findById(req.usuario.id)
        res.json({usuario});
    }catch(error){
        res.status(500).json({msg:"Hubo error"})
    }
}