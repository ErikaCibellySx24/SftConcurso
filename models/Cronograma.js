const db = require("../server/db");

const Cronograma = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM cronograma ORDER BY id DESC", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  create: (dia, materias) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO cronograma (dia, materias) VALUES (?, ?)",
        [dia, materias],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }

};

module.exports = Cronograma;