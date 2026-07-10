const express = require("express");
const path = require("path");
const cors = require("cors");

// Banco (garante que as tabelas sejam criadas)
require("./db");

// Rotas
const authRoutes = require("../routes/auth");
const questoesRoutes = require("../routes/questoes");
const estudosRoutes = require("../routes/estudos");
const cronogramaRoutes = require("../routes/cronogramaRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/login.html"));
});

// =======================
// ROTAS DA API
// =======================

// Autenticação
app.use("/api/auth", authRoutes);

// Sistema
app.use("/api/questoes", questoesRoutes);
app.use("/api/estudos", estudosRoutes);
app.use("/api/cronograma", cronogramaRoutes);

// Caso a rota não exista
app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada."
    });
});

// Inicialização
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚔 Police Tracker rodando em http://localhost:${PORT}`);
});