import { CommandInteraction, Client, EmbedBuilder } from "discord.js";
import { Command } from "../command";

const embed = new EmbedBuilder()
    .setColor(0xe69138)
    .setTitle("Fireship Swag!")
    .setURL("https://swag.fireship.io")
    .setDescription("Checkout the Fireship Merch Store! https://swag.fireship.io")
    

export const Shop: Command = {
    name: "shop",
    description: "Returns a link to the Fireship Store",
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({embeds: [embed]})
    }
};