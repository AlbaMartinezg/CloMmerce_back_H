const express = require("express");
const { autenticarUsuario } = require("../controllers/authController");
const router = express.Router();
const authController = require("../controllers/authController");
const authMidd = require("../middleware/authMidd");

router.post("/", authController.autenticarUsuario);
router.get("/", authMidd, authController.usuarioAutenticado);

module.exports = router;