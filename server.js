const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config;
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9000;

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));

// pokemon routes
const pokemons = require("./routes/pokemonRoutes");

app.use(express.json());

// mongoDB connection
//const connectDB = require("./dbinit");
// connectDB();

//mongoose
const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect("mongodb://localhost/pokemons");

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/pokemons", pokemons);

app.get("/pokemon", (req, res) => {
  res.send(mongo);
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
