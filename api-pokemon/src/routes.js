const express = require("express");
const { listaPokemons, detalhesPokemon } = require("./controllers/controllers");

const routes = express();

routes.get("/", listaPokemons);
routes.get("/pokemon/:idOrName", detalhesPokemon);

module.exports = routes;