//chat
const express = require("express");
const router = express.Router();
const { createChat, listChats } = require("./controller.js");

router.post("/", (req, res) => {
  createChat(req.body.users)
    .then((resul) => {
      res.send(resul);
    })
    .catch((e) => {
      console.error(e);
      res.status(404).send("Error!");
    });
});

router.get("/", (req, res) => {
  listChats()
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      console.error(e);
      res.status(404).send("Error");
    });
});

module.exports = router;
