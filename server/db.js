const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "../database/tracker.db")
);

db.serialize(() => {

  // ==========================
  // USUÁRIOS
  // ==========================
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL,
      areaConcurso TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // ==========================
  // CRONOGRAMA
  // ==========================
  db.run(`
    CREATE TABLE IF NOT EXISTS cronograma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      dia TEXT NOT NULL,
      materia TEXT NOT NULL,
      concluido INTEGER DEFAULT 0,

      FOREIGN KEY (usuario_id)
      REFERENCES usuarios(id)
      ON DELETE CASCADE
    )
  `);

  // ==========================
  // ESTUDOS
  // ==========================
  db.run(`
    CREATE TABLE IF NOT EXISTS estudos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      materia TEXT,
      horas REAL,
      data TEXT DEFAULT CURRENT_DATE,

      FOREIGN KEY (usuario_id)
      REFERENCES usuarios(id)
      ON DELETE CASCADE
    )
  `);

  // ==========================
  // QUESTÕES
  // ==========================
  db.run(`
    CREATE TABLE IF NOT EXISTS questoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      materia TEXT,
      resolvidas INTEGER,
      acertos INTEGER,
      data TEXT DEFAULT CURRENT_DATE,

      FOREIGN KEY (usuario_id)
      REFERENCES usuarios(id)
      ON DELETE CASCADE
    )
  `);

});

module.exports = db;