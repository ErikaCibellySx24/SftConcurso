const express = require("express");
const db = require("../server/db");

const router = express.Router();

// LISTAR TODOS
router.get("/", (req, res) => {
  db.all("SELECT * FROM estudos ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// CRIAR ESTUDO
router.post("/", (req, res) => {
  const { materia, horas } = req.body;

  db.run(
    "INSERT INTO estudos (materia, horas) VALUES (?, ?)",
    [materia, horas],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

router.post("/import", (req, res) => {
  const estudos = req.body;

  const stmt = db.prepare(
    "INSERT INTO estudos (materia, horas, data_estudo) VALUES (?, ?, ?)"
  );

  try {
    estudos.forEach(e => {
      stmt.run(e.materia, e.horas, e.data_estudo);
    });

    stmt.finalize();

    res.json({ message: "Importação concluída" });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;