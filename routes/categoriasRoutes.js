const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController")
const authMidd = require("../middleware/authMidd");

router.get("/", categoriasController.obtenerCategoriaHome );
router.get("/", authMidd, categoriasController.obtenerCategoria);
router.get("/:id", authMidd, categoriasController.obtenerCategoriaId);
router.post("/", authMidd,categoriasController.crearCategoria );
router.put("/:id", authMidd, categoriasController.actualizarCategoria);
router.delete("/:id",authMidd,categoriasController.borrarCategoria );




//definir rutas para poder usarlas
module.exports = router;