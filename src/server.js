const express = require("express");
const mathlib = require("./math");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello"));

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  res.send(String(mathlib.add(a, b)));
});

app.get("/isEven", (req, res) => {
  const n = parseInt(req.query.n, 10);
  res.send(String(mathlib.isEven(n)));
});

app.get("/hex-to-rgb", (req, res) => {
  const hex = req.query.hex;
  const rgb = mathlib.hexToRgb(hex);
  res.json(rgb);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
