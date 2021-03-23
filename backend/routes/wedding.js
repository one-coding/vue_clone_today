const express = require("express");
const router = express.Router();
const weddings = require("../wedding.json");

router.get("/", (req, res, next) => {
  res.send(weddings);
});
router.get("/", (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const wedding = weddings.filter(movie => {
    return wedding.id === id;
  });
  res.send(wedding);
});

module.exports = router;
