const express = require("express");
const path = require("path");
const cors = require("cors");

const questoesRoutes = require("../routes/questoes");
const estudosRoutes = require("../routes/estudos");
const cronogramaRoutes = require("../routes/cronograma");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 FRONTEND
app.use(express.static(path.join(__dirname, "../public")));

// 🔥 API
app.use("/api/questoes", questoesRoutes);
app.use("/api/estudos", estudosRoutes);
app.use("/api/cronograma", cronogramaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚔 Police Tracker rodando em http://localhost:${PORT}`);
});