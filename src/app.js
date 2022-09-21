const express = require("express");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/boat", (req, res) => {
  res.send("você vai comprar um barco");
});

app.get("/house", (req, res) => {
  res.send("você tem um Apartamento");
});

app.get("/children", (req, res) => {
  res.send("existem apenas um filho");
});

app.listen(port, () => {
  console.log(`Hello, Express!, estou funcionado na porta ${port}`);
});
