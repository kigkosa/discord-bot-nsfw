const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('move_member_chanel')
        .setDescription('ย้ายห้อง')
        .addStringOption(option =>
            option.setName('from')
                .setDescription('จากแชแนล'))
        .addStringOption(option =>
            option.setName('to')
                .setDescription('ไปที่แชแนล'))
                
                ,
    async execute(interaction, client) {

        if (interaction.commandName === 'move_member_chanel') {

       
            if (!interaction.member.roles.cache.has('872810186765656064')) {
                return await interaction.reply({
                    content: `You Don't Have The Permisssion`,
                    ephemeral: true
                });
            }
            if (!interaction.options.getString("to") || !interaction.options.getString("from") ){
                return await interaction.reply({ content: 'ไม่พบห้องที่ต้องการให้ไป', ephemeral: true });
            }
           

            const channel = await client.channels.fetch(interaction.options.getString("from"));
            const toChannel = await client.channels.fetch(interaction.options.getString("to"));


            if (channel.type === 2) {
                channel.members.map(member =>{
                    member.voice.setChannel(toChannel);
                    // console.log(member.user.tag);
                });
                client.channels.cache.get('995492978464411748').send( interaction.member.user.tag+' ได้ทำการย้ายผู้เล่นทั่งห้องจาก ('+interaction.options.getString("from")+") ไปที่ ("+interaction.options.getString("to")+")");
                return await interaction.reply({ content: 'สำเร็จ', ephemeral: true });
            } else {
                return await interaction.reply({ content: 'Channel is not a voice channel.', ephemeral: true });
            }
            

        }
       
      
       

    }
}