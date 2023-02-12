const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('Delete a message beffore 1 message from nsfw channel'),
    async execute(interaction) {

        if (interaction.channel.id == "1051854619736801280" && interaction.member.roles.cache.has("1051086920169570404")) {
            await interaction.channel.bulkDelete(1).then(messages => {
                interaction.reply(`Deleted ${messages.size} message(s)`);
                setTimeout(() => interaction.deleteReply(), 3000);
            })
            .catch(console.error);
        }
      
       

    }
}