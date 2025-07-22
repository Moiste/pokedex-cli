import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 locations",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Displays the pokemon found in provided area",
      callback: commandExplore
    }
  };
}
