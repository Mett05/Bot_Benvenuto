const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOCKET BOT DISCORD DEVELOPMENT'); 

client.on('ready', () => {
    console.log('[mettscript] BOT STARTATO CON SUCCESSO.')
});

//ATTENZIONE
//Prima di utilizzare questi comandi è necessario attivare i "Privileged Gateway Intents" nella pagina del bot ovvero su discord developer portal (sia "PRESENCE INTENT" che "SERVER MEMBERS INTENT")

//BENVENUTO
client.on("guildMemberAdd", (member) => {
    //console.log(member.guild); Per avere tutte le info del utente e del server
    client.channels.cache.get("ID CANALE").send("Ciao " + member.toString() + " Benvenuto in **" + member.guild.name + "**\rSei il **" + member.guild.memberCount + "° membro**");

})

//ADDIO
client.on("guildMemberRemove", (member) => {
    client.channels.cache.get("ID CANALE").send("Ciao ciao" + member.toString() + ", torna presto!");
})
