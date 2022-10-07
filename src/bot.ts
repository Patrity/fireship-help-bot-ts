import { Client } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import * as dotenv from 'dotenv';

console.log("Starting bot...");
dotenv.config()


//create bot object
const client = new Client(
    { 
        intents: ['Guilds', 'GuildMessages'] 
    });

//init listeners
ready(client);
interactionCreate(client);

//init bot
client.login(process.env.BOT_TOKEN);
