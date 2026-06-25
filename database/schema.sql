const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/tracker.db");

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS estudos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      materia TEXT,
      horas REAL,
      data TEXT DEFAULT CURRENT_DATE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS questoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      materia TEXT,
      resolvidas INTEGER,
      acertos INTEGER,
      data TEXT DEFAULT CURRENT_DATE
    )
  `);

  // 👇 FALTAVA ESSA TABELA
  db.run(`
    CREATE TABLE IF NOT EXISTS cronograma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dia TEXT NOT NULL,
      materia TEXT NOT NULL,
      concluido INTEGER DEFAULT 0
    )
  `);

});

module.exports = db;