import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }
  const name = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(name);
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);
  const successRate = Math.floor(Math.random() * pokemon.base_experience);

  if (successRate > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
  state.pokedex[pokemon.name] = pokemon;
}
