module.exports = (client) => {
    client.on('messageCreate', msg => {
        if(msg.channel.id==1051854619736801280){
            // show time post and name
            let date_ob = new Date();
            console.log(date_ob+" :: "+msg.author.username + " >> " + msg.content)
    
            if (client.user.id != msg.author.id){
                msg.delete()
            }
            if(msg.guild.members.cache.get(msg.author.id).roles.cache.has("1051086920169570404")){
                if (msg.content != ""){
                    msg.channel.send(msg.content).then((message)=>{
                        message.react("👍")
                        message.react("👎")
                    });
                    
                }
        
            }
        }
    });
}