import { State } from "./state";

export async function commandPokedex(state: State): Promise<void> {
  if (Object.keys(state.pokedex).length === 0) {
    throw new Error("you have not caught any pokemon");
  }
  console.log("Your Pokedex:");
  for (const pokemon of Object.values(state.pokedex)) {
    console.log(`  - ${pokemon.name}`);
  }
}
