const express = require("express");
const { get } = require("mongoose");

const app = express.Router();

const {
  getAllPokemons,
  getOnePokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonInfo,
} = require("../controllers/pokemonController");

app.route("/").get(getAllPokemons).post(createPokemon);

app.route("/:id").get(getOnePokemon).put(updatePokemon).delete(deletePokemon);

app.route("/:id/:info").get(getPokemonInfo);

module.exports = app;
