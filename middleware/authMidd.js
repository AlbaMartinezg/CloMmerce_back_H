//capa para dar mayor seguridad 
//funcion donde el programa se ejecuta y vuelve a la misma línea

const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){    
    //lee token desde el header de postman
    //para que salga el token en el postman se debe hacer POST y colocar un JSON con el email y la contraseña {http://localhost:4000/api/auth}
    // con esta misma dirección se realiza la busqueda de usuario {http://localhost:4000/api/auth}
    
    const token = req.header("x-auth-token");
    //console.log(token); para ver por consola al hacer el proyecto
    //revisar si no hay token
    if(!token){
        return res.status(400).json({msg:"no hay token"});
    }
    //validar token
    try{
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario =cifrado.usuario;
        //console.log(cifrado.usuario);
        next();
    }catch(error){
        res.status(400).json({msg:"Token no valido"});
    }
}
