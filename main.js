require('dotenv').config();
const keepAlive = require('./server');
const {
    Client,
    Collection,
    Intents,
    MessageEmbed
} = require('discord.js');
const message = require('./events/guild/message');
const botinfo = require('./commands/info/botinfo');
const client = new Client({
    disableMentions: 'everyone',
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    ws: {
        intents: Intents.ALL
    }
});



client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('guildCreate', guild => {
    const e = new MessageEmbed()
        .setTitle('Ticket Bot')
        .setFooter(`${client.user.username}'s Info`, `${client.user.avatarURL()}`)
        .setDescription('My prefix is t! to get started type t!help any role with admin will have acces to the tickets')
        .setColor('BLUE')



    guild.owner.send(e)
})
client.on('message', message => {
    if (message.content === "t!membercount" && message.member.id === process.env.BOT_OWNER) { 
        var interval = setInterval (function () {
          message.channel.send(`Total members: ${message.guild.memberCount}`)
        }, 1 * 3600000); 
      }
    
})
keepAlive();
client.login(process.env.BOT_TOKEN);