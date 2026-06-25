const express = require("express");
const db = require("../server/db");

const router = express.Router();

// LISTAR CRONOGRAMA
router.get("/", (req, res) => {
  db.all("SELECT * FROM cronograma ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ADICIONAR ITEM NO CRONOGRAMA
router.post("/", (req, res) => {
  const { dia, materias } = req.body;

  db.run(
    "INSERT INTO cronograma (dia, materias) VALUES (?, ?)",
    [dia, materias],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;