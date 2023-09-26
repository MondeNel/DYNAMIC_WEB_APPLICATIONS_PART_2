
### Challenge 1 (map)

Given an array of numbers, return an array of each number, squared
``````
const nums = [1, 2, 3, 4, 5]
outcome [1, 4, 9, 16, 25]

const numbers = nums.map((num) => num * num);
console.log(numbers);
``````
### Challenge 2 (map)

Given an array of strings, return an array where 
the first letter of each string is capitalized
``````
const names = ["alice", "bob", "charlie", "danielle"]
outcome   ["Alice", "Bob", "Charlie", "Danielle"]

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalized)
``````

### challenge 3 (map)

Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

Given: ["Bulbasaur", "Charmander", "Squirtle"]
outcome: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

``````
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
outcome ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const wrappedPokemon = pokemon.map((characters)=>  `<p>${characters}</p>`);

console.log(wrappedPokemon);
``````