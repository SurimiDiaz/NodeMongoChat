//user
const express = require("express");
const router = express.Router();
const { addUser, getUsers } = require("./controller.js");

router.post("/", (req, res) => {
  addUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send("Error!");
    });
});

router.get("/", (req, res) => {
  const filterUser = req.query.userName || null;

  getUsers(filterUser)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
      res.status(404).json({ message: e });
    });
});
module.exports = router;
