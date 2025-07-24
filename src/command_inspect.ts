import { State } from "./state";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }
  const name = args[0];
  const pokemon = state.pokedex[name];
  if (!pokemon) {
    throw new Error("you have not caught that pokemon");
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const pokemonStat of pokemon.stats) {
    console.log(`  -${pokemonStat.stat.name}: ${pokemonStat.base_stat}`);
  }
  console.log("Types:");
  for (const pokemonType of pokemon.types) {
    console.log(`  -${pokemonType.type.name}`);
  }
}
