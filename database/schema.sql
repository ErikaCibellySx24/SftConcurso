const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// 🔥 USANDO UM ÚNICO BANCO (o que você criou)
const db = new sqlite3.Database(
  path.resolve(__dirname, "./database.db")
);

db.serialize(() => {
    // 👤 USUÁRIOS (CADASTRO E LOGIN)
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

  // 📅 CRONOGRAMA (AGORA NÃO VAI MAIS QUEBRAR)
  db.run(`
    CREATE TABLE IF NOT EXISTS cronograma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dia TEXT NOT NULL,
      materia TEXT NOT NULL,
      concluido INTEGER DEFAULT 0
    )
  `);

  // 📚 ESTUDOS
  db.run(`
    CREATE TABLE IF NOT EXISTS estudos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      materia TEXT,
      horas REAL,
      data TEXT DEFAULT CURRENT_DATE
    )
  `);

  // 🧠 QUESTÕES
  db.run(`
    CREATE TABLE IF NOT EXISTS questoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      materia TEXT,
      resolvidas INTEGER,
      acertos INTEGER,
      data TEXT DEFAULT CURRENT_DATE
    )
  `);

});

module.exports = db;