import { CommandInteraction, Client, EmbedBuilder } from "discord.js";
import { Command } from "../command";
import { escapeMarkdown } from "../util";

const embed = new EmbedBuilder()
    .setColor(0xe69138)
    .setTitle("How to share code")
    .setDescription(escapeMarkdown("```js\n<your code here>\n```"))
    .addFields(
        {name: 'Example language tags: ', value: 'js, ts, java, sql, go, golang, md, rust, ruby, html, json, c++, cpp, csharp, c, kt, kotlin, py, python, php, lua'}
    )
    

export const Code: Command = {
    name: "code",
    description: "Returns a guide on how to paste code in discord",
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({embeds: [embed]})
    }
};