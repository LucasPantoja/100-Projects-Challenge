const poke_container = document.getElementById('poke_container');
const pokemon_number = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
	ice: '#2a86c438'
};

const fetchPokemons = async () => {
    for(i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resPokemon = await fetch(urlPokemon);
    const pokemon = await resPokemon.json()
    // console.log(pokemon.id)
    // console.log(pokemon.name)
    // console.log(pokemon.types[0].type.name)
    // console.log(pokemon.sprites.other.dream_world.front_default)
    const color = colors[pokemon.types[0].type.name];
    createPokemonCard(pokemon, color);
};

function createPokemonCard(pokemon, color){

    const pokeInnerHTML = 
    `<div class="card poke-card" style="background-color: ${color}">
        <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" style="width:120px; height:120px">
        <ul class="list-group list-group-flush" >
            <li class="list-group-item" >Number: ${pokemon.id}</li>
            <li class="list-group-item">Name: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
            <li class="list-group-item">Type: ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</li>
        </ul>
    </div>`

    poke_container.innerHTML += pokeInnerHTML;
}


fetchPokemons()
