const { ActivityType } = require("discord.js");
module.exports = (client) => {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
      
        client.user.setStatus('online')
        client.user.setActivity( "Sponser by Rezicx",{type: ActivityType.Playing});
      });
}