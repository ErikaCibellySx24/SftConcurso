const express = require("express");
const router = express.Router();
const db = require("../server/db"); // ajuste o caminho se necessário

// CADASTRAR USUÁRIO
router.post("/cadastro", (req, res) => {
    const { nome, email, senha, areaConcurso } = req.body;

    if (!nome || !email || !senha || !areaConcurso) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });
    }

    // Verifica se já existe usuário
    db.get(
        "SELECT id FROM usuarios WHERE email = ?",
        [email],
        (err, usuario) => {
            if (err) {
                return res.status(500).json({
                    sucesso: false,
                    mensagem: err.message
                });
            }

            if (usuario) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: "E-mail já cadastrado."
                });
            }

            db.run(
                `INSERT INTO usuarios
                (nome, email, senha, areaConcurso)
                VALUES (?, ?, ?, ?)`,
                [nome, email, senha, areaConcurso],
                function (err) {

                    if (err) {
                        return res.status(500).json({
                            sucesso: false,
                            mensagem: err.message
                        });
                    }

                    res.json({
                        sucesso: true,
                        id: this.lastID
                    });

                }
            );
        }
    );
});

// LOGIN
router.post("/login", (req, res) => {

    const { email, senha } = req.body;

    db.get(
        `SELECT * FROM usuarios
         WHERE email = ?`,
        [email],
        (err, usuario) => {

            if (err) {
                return res.status(500).json({
                    sucesso: false,
                    mensagem: err.message
                });
            }

            if (!usuario) {
                return res.status(401).json({
                    sucesso: false,
                    mensagem: "Usuário não encontrado."
                });
            }

            if (usuario.senha !== senha) {
                return res.status(401).json({
                    sucesso: false,
                    mensagem: "Senha incorreta."
                });
            }

            res.json({
                sucesso: true,
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    areaConcurso: usuario.areaConcurso
                }
            });

        }
    );

});

module.exports = router;