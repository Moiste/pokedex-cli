import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }
  const response = await state.pokeAPI.fetchLocation(args[0]);
  console.log(`Exploring ${args[0]}...`);
  const encounters = response.pokemon_encounters;
  console.log("Found Pokemon:");
  
  for (const encounter of encounters) {
    console.log(`- ${encounter.pokemon.name}`);
  }
}
