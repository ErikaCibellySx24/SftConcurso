const express = require("express");
const router = express.Router();
const multer = require("multer");
const xlsx = require("xlsx");
const db = require("../server/db");

const upload = multer({ dest: "uploads/" });

/* 🔥 UPLOAD EXCEL */
router.post("/upload", upload.single("file"), (req, res) => {
  try {

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = xlsx.utils.sheet_to_json(sheet);

    /*
      Excel esperado:
      dia | materia
      Segunda | Português
      Segunda | RLM
    */

    const stmt = db.prepare(
      "INSERT INTO cronograma (dia, materia, ordem) VALUES (?, ?, ?)"
    );

    data.forEach((row, index) => {
      stmt.run(row.dia, row.materia, index);
    });

    stmt.finalize();

    res.json({ message: "Cronograma importado com sucesso!" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro ao importar Excel" });
  }
});

/* 🔥 LISTAR CRONOGRAMA */
router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM cronograma ORDER BY id DESC",
    [],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
});

module.exports = router;