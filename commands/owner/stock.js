const {
    MessageEmbed
} = require('discord.js');
require('dotenv').config()

module.exports = {
    name: 'stock',
    category: 'Owner',
    description: 'checks the nitro stock',
    aliases: ['sk'],
    usage: 'stock',
    userperms: ['BOT_OWNER'],
    botperms: ['USE_EXTERNAL_EMOJIS'],
    run: async (client, message, args) => {
        const e = new MessageEmbed();
        e.setTitle("Stock");
        e.setDescription('UNCHECKED = <a:Infinity_loop:783796540313042995>\n\n\nCLASSIC = you can donate\n\n\nREG = you can donate')
        message.channel.send(e)

    },
};