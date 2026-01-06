const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// LOG LEAD
app.post("/log-lead", (req, res) => {
  console.log("📩 NOUVEAU LEAD REÇU");
  console.log("🕒", new Date().toISOString());
  console.log("📦 DATA :", JSON.stringify(req.body, null, 2));
  console.log("────────────────────────────────────────");

  res.status(200).json({ ok: true });
});


// SERVE REACT BUILD
app.use(express.static(path.join(__dirname, "build")));

// ⚠️ IMPORTANT : PAS DE "*"
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 EXPRESS SERVER RUNNING ON PORT", PORT);
});
