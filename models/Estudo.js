const db = require("../server/db");

const Estudo = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM estudos ORDER BY id DESC", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  create: (materia, horas) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO estudos (materia, horas) VALUES (?, ?)",
        [materia, horas],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }

};

module.exports = Estudo;