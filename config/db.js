const mongoose = require("mongoose");

const conectarDB = async()=>{
    try{
        const connection = await mongoose.connect(
            //alt z para que se vea ajuste de línea
            
            //después del mongodb.net/se coloca el nombre de la base de datos
            "mongodb+srv://analu:1951@cluster0.1se7mw6.mongodb.net/clommerce",{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            });
            const url = `${connection.connection.host}:${connection.connection.host}`;
            //console.log(`MongoDB conectado en :${url}`);
    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);
    }
    //con alt + 96 para sacar la comilla al reves `
};

module.exports = conectarDB;