const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('move_member_chanel')
        .setDescription('ย้ายห้อง')
        .addStringOption(option =>
            option.setName('to')
                .setDescription('ไปที่แชแนล'))
                
                ,
    async execute(interaction, client) {

        if (interaction.commandName === 'move_member_chanel') {
            let flag = `MODERATOR`;
            if (!interaction.member.permissions.has(flag)) {
                return await interaction.reply({
                    content: `You Don't Have The Permisssion To Execute this command, must have the following permission: **${flag}**`,
                    ephemeral: true
                });
            }
            if (!interaction.options.getString("to")){
                return await interaction.reply({ content: 'ไม่พบห้องที่ต้องการให้ไป', ephemeral: true });
            }
            const voice_channel_id = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId;
            const channel = await client.channels.fetch(voice_channel_id);
            const toChannel = await client.channels.fetch(interaction.options.getString("to"));


            if (channel.type === 2) {
                channel.members.map(member =>{
                    member.voice.setChannel(toChannel);
                });
                return await interaction.reply({ content: 'สำเร็จ', ephemeral: true });
            } else {
                return await interaction.reply({ content: 'Channel is not a voice channel.', ephemeral: true });
            }
            

        }
       
      
       

    }
}