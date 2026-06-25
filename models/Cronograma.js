const db = require("../server/db");

const Cronograma = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM cronograma ORDER BY id ASC",
        [],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  },

  create: (dia, materia) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO cronograma (dia, materia, concluido) VALUES (?, ?, 0)",
        [dia, materia],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  },

  marcarConcluido: (id) => {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE cronograma SET concluido = 1 WHERE id = ?",
        [id],
        function (err) {
          if (err) reject(err);
          else resolve(true);
        }
      );
    });
  },

  reset: () => {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM cronograma", (err) => {
        if (err) reject(err);
        else resolve(true);
      });
    });
  }

};

module.exports = Cronograma;