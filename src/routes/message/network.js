// Las rutas del componente como diet.js en la PI

const express = require("express");
const router = express.Router();
const { addMessage, getHystori } = require("./controller.js");

router.post("/", (req, res) => {
  const { user, message } = req.body;
  addMessage(user, message)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send(err));
});

router.get("/", (req, res) => {
  getHystori()
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: err });
    });
});

module.exports = router;
