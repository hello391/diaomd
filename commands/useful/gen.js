const {
    MessageEmbed
} = require('discord.js');
require('dotenv').config()

module.exports = {
    name: 'gen',
    category: 'Useful',
    description: 'Generates a Unchecked nitro code',
    aliases: ['gen'],
    usage: 'gen',
    userperms: [],
    botperms: [],
    run: async (client, message, args) => {
        if (message.channel.id != "783780965331107880") return;
        if (message.channel.id = "783780965331107880") {
            const e = new MessageEmbed();
            e.setTitle('Successfully generated your Nitro')
            e.setDescription('Make your DMs are on so you can receive the direct message.')
            e.setColor('GREEN')

            message.channel.send(e)
            var randomString = require('random-string-simple');
            const r = randomString(16)
            message.member.send(`discord.gift/${r}`)




        }
    },
};