import { State } from "./state";

export async function commandMap(state: State): Promise<void> {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;
  
  for (const location of locations.results) {
    console.log(location.name);
  }
}

export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;
  
  for (const location of locations.results) {
    console.log(location.name);
  }
}