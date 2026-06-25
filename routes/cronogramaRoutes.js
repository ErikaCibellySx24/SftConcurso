const express = require("express");
const router = express.Router();
const multer = require("multer");
const xlsx = require("xlsx");
const path = require("path");
const db = require("../db");

// 📦 configuração upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

/* 🔥 UPLOAD EXCEL */
router.post("/upload", upload.single("file"), (req, res) => {

  try {
    const filePath = path.resolve(req.file.path);

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(sheet);

    // limpa antes (evita duplicação)
    db.run("DELETE FROM cronograma", () => {

      const stmt = db.prepare(`
        INSERT INTO cronograma (dia, materia, concluido)
        VALUES (?, ?, 0)
      `);

      data.forEach(item => {
        stmt.run(item.dia, item.materia);
      });

      stmt.finalize();

      res.json({
        message: "Cronograma importado com sucesso!",
        total: data.length
      });

    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Erro ao importar Excel"
    });
  }
});

/* 🔥 LISTAR CRONOGRAMA */
router.get("/", (req, res) => {

  db.all("SELECT * FROM cronograma", [], (err, rows) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

module.exports = router;