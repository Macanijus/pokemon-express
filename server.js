const express = require("express");
const app = express();
const jsonData = require("./pokedex.json");
const cors = require("cors");

//allow CORS in React
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 9000;

app.use(express.json());

app.get("/pokemon", (req, res) => {
  res.send(jsonData);
});

app.get("/pokemon/:id", (req, res) => {
  res.send(jsonData[req.params.id - 1]);
});

app.get("/pokemon/:id/:info", (req, res) => {
  res.send(jsonData[req.params.id - 1][req.params.info]);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
