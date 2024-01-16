// fetchData: Function used for making HTTP requests to fetch Pokémon data.
//             Simplifies asynchronous data fetching in JavaScript and
//             used for interacting with the PokeAPI to retrieve and display
//             Pokémon sprites.

fetchData();

async function fetchData() {
    try {
        const pokemonNameInput = document.getElementById("pokemonName");
        const pokemonName = pokemonNameInput.value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon data for ${pokemonName}`);
        }

        const data = await response.json();

        if (!data.sprites || !data.sprites.front_default) {
            throw new Error(`Invalid response format: Missing 'sprites' or 'front_default' property for "${pokemonName}"`);
        }

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error) {
        console.error(`Error in fetchData: ${error.message}`);
    }
}