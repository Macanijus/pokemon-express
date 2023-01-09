const express = require("express");

const app = express.Router();

const {
  getAllPokemons,
  getOnePokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
} = require("../controllers/pokemonController");

app.route("/").get(getAllPokemons).post(createPokemon);

app.route("/:id").get(getOnePokemon).put(updatePokemon).delete(deletePokemon);

module.exports = app;
