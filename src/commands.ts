import { Command } from "./command";
import { Ping } from "./commands/ping";
import { Code } from "./commands/code";
import { Shop } from "./commands/shop";
import { ProHelp } from "./commands/prohelp";

export const Commands: Command[] = [Ping, Code, Shop, ProHelp];