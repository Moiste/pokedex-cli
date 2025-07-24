import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { inspect } from "util";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

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
    },
    catch: {
      name: "catch",
      description: "Catches the specified pokemon",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "Inspects the specified pokemon in your pokedex",
      callback: commandInspect
    },
    pokedex: {
      name: "pokedex",
      description: "Shows all the pokemon in your pokedex",
      callback: commandPokedex
    }
  };
}
