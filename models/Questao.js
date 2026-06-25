const db = require("../server/db");

const Questao = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM questoes ORDER BY id DESC", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  create: (materia, resolvidas, acertos) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO questoes (materia, resolvidas, acertos) VALUES (?, ?, ?)",
        [materia, resolvidas, acertos],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }

};

module.exports = Questao;