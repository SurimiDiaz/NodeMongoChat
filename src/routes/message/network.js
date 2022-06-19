// Las rutas del componente como diet.js en la PI

const express = require("express");
const router = express.Router();
// const { showDiets } = require("./diet_module");

// router.get("/", async (req, res) => {
//   try {
//     return res.json(await showDiets());
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// });

router.get("/", (req, res) => {
  res.send("Hola desde message");
});

module.exports = router;
