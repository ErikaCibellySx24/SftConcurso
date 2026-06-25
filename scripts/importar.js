const db = require("./database");
const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./data/cronograma.json"))
);

// limpa antes de alimentar (evita duplicação)
db.run("DELETE FROM cronograma", () => {

  const stmt = db.prepare(`
    INSERT INTO cronograma (dia, materia, concluido)
    VALUES (?, ?, 0)
  `);

  data.forEach(item => {
    stmt.run(item.dia, item.materia);
  });

  stmt.finalize();

  console.log("🔥 Cronograma alimentado automaticamente!");
});