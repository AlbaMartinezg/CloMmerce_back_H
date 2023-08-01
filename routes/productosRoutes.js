const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const authMidd = require("../middleware/authMidd");

router.get( "/:id", authMidd, productosController.obtenerProducto );
router.post( "/", authMidd, productosController.crearProducto );
router.put( "/:id", authMidd, productosController.actualizarProducto );
router.delete( "/:id", authMidd, productosController.borrarProducto );


//definir rutas para poder usarlas
module.exports = router;