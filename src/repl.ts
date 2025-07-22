import { getCommands } from './commands.js';
import { State } from './state.js';

export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .trim()
  .split(' ')
  .filter((text) => text !== "");
}

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on('line', async (line: string) => {
    const input = cleanInput(line);
    if (input.length === 0) {
      state.readline.prompt();
    }
    else {
      const commandName = input[0];
      const args = input.slice(1);
      const commands = getCommands();
      const cmd = commands[commandName];

      if (cmd) {
        try {
          await cmd.callback(state, ...args);
        } catch (e) {
          console.log((e as Error).message);
        }
      }

      else {
        console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`)
        state.readline.prompt();
      }
      state.readline.prompt();
    }
  });
}