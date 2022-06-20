const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const message = require("./message/network.js");
const user = require("./user/network.js");
const chat = require("./chat/network.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/message", message);
router.use("/user", user);
router.use("/chat", chat);

module.exports = router;
