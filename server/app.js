const express = require("express");
const path = require("path");
const cors = require("cors");

const questoesRoutes = require("../routes/questoes");
const estudosRoutes = require("../routes/estudos");
const cronogramaRoutes = require("../routes/cronogramaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 FRONTEND (arquivos estáticos)
app.use(express.static(path.join(__dirname, "../public")));

// 🔥 UPLOADS (IMPORTANTE para multer salvar arquivos)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🔥 ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/dashboard.html"));
});

// 🔥 API
app.use("/api/questoes", questoesRoutes);
app.use("/api/estudos", estudosRoutes);
app.use("/api/cronograma", cronogramaRoutes);

// PORTA
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚔 Police Tracker rodando em http://localhost:${PORT}`);
});