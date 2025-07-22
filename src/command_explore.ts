import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  const response = await state.pokeAPI.fetchPokemons(args[0]);
  console.log(`Exploring ${args[0]}...`);
  const encounters = response.pokemon_encounters;
  console.log("Found Pokemon:");
  
  for (const encounter of encounters) {
    console.log(`- ${encounter.pokemon.name}`);
  }
}
