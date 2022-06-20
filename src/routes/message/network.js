// Las rutas del componente como diet.js en la PI

const express = require("express");
const router = express.Router();
const {
  addMessage,
  getHystori,
  updateMessage,
  killMessage,
} = require("./controller.js");

router.post("/", (req, res) => {
  const { user, message } = req.body;
  addMessage(user, message)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send(err));
});

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;

  getHystori(filterMessages)
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: err });
    });
});

router.patch("/:id", (req, res) => {
  updateMessage(req.params.id, req.body.newMessage)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send(err);
    });
});

router.delete("/:id", (req, res) => {
  killMessage(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send(err);
    });
});

module.exports = router;
