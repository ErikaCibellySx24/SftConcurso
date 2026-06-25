const express = require("express");
const Questao = require("../models/Questao");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Questao.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { materia, resolvidas, acertos } = req.body;
    const result = await Questao.create(materia, resolvidas, acertos);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;