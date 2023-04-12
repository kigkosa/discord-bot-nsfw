module.exports = (client) => {
    client.on('messageCreate', msg => {
        if(msg.channel.id==1051854619736801280 || msg.channel.id == 1050781023404834866 || msg.channel.id ==1050781643486543953){

            // show time post and name
            let date_ob = new Date();
            console.log(date_ob+" :: "+msg.author.username + " >> " + msg.content)
    
            if (client.user.id != msg.author.id){
                msg.delete()
            }
            if(msg.guild.members.cache.get(msg.author.id).roles.cache.has("1051086920169570404") || msg.guild.members.cache.get(msg.author.id).roles.cache.has("1050781023404834866") || msg.guild.members.cache.get(msg.author.id).roles.cache.has("1050781643486543953")){
                const urls = []
                if (msg.attachments){
                    msg.attachments.forEach(function(attachment) {
                        urls.push({attachment:attachment.url})
                      });
                }
                if (msg.content != "" || urls != []){
                    msg.channel.send({ content: msg.content,files:urls}).then((message)=>{
                        message.react("👍")
                        message.react("👎")
                    });
                    
                }
        
            }
        }
    });
}