import { CommandInteraction, Client, EmbedBuilder } from "discord.js";
import { Command } from "../command";

const embed = new EmbedBuilder()
    .setColor(0xe69138)
    .setTitle("How to obtain Fireship Pro perks")
    .setDescription("Receive access to the Fireship Pro only channels and help forums")
    .addFields(
        {
            name: "Use the `/pro` command",
            value: "Submit your Fireship.io email address for verification"
        },
        {
            name: "Need a pro membership?",
            value: "Head to https://fireship.io/pro"
        }
    )
    

export const ProHelp: Command = {
    name: "prohelp",
    description: "Returns a message on how to activate pro perks",
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({embeds: [embed]})
    }
};