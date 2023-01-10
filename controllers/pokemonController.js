const Pokemons = require("../schemas/Pokemons");

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemons.find();
    res.status(200).json({
      success: true,
      pokemons,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOnePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemons.where("id").equals(req.params.id);
    res.status(200).json({
      success: true,
      pokemon,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPokemon = async (req, res) => {
  try {
    const { name, type, base } = req.body;
    // console.log("req.body", req.body);
    const pokemon = await Pokemons.create({ name, type, base });
    res.status(201).json({
      success: true,
      pokemon,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemons.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, pokemon });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deletePokemon = async (req, res) => {
  try {
    await Pokemons.findByIdAndDelete(req.params.id);
    res.status(200).json({
      response: "Pokemon deleted successufully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllPokemons,
  getOnePokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
