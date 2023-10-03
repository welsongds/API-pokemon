const { listarPokemons, detalharPokemon } = require("utils-playground");

const listaPokemons = async (req, res) => {
    let { pag } = req.query;
    if (!pag) {
        pag = 1
    }
    const pokemons = await listarPokemons(pag)
    return res.status(200).json(pokemons.results);
}

const detalhesPokemon = async (req, res) => {
    const { idOrName } = req.params
    let pokemon = ""

    pokemon = await detalharPokemon(idOrName);

    return res.status(200).json({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species,
    });
}
module.exports = { listaPokemons, detalhesPokemon }