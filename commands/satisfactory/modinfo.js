const { prefix } = require('../../config/config.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'smodinfo',
	description: 'Satisfactory Mod Info',
	guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
    usage: '[MOD_ID]',
	execute(message, args) {
        if (!args.length) {
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Please specify a Mod ID!')
            .setImage("https://i.imgur.com/9X2Ki5i.png")
            message.channel.send(embed);
        }
        
        async function retrieve() {
            var json2 = await fetch('https://api.ficsit.app/v1/mods?limit=1&search='+args).then(response => response.json())
            var json = await fetch('https://api.ficsit.app/v1/mod/'+json2.data[0].id).then(response => response.json())
            const embed2 = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle(json.data.name)
            .setThumbnail(json.data.logo)
            .setDescription(json.data.short_description+'\n\n**Link:**\nhttps://ficsit.app/mod/'+json2.data[0].id)
            message.channel.send(embed2);
        }
        retrieve()
	},
};