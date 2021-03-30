const { prefix } = require('../../config/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Here is my commands:')
            .setDescription(commands.map(command => command.name).join(',\n'))
            .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
            message.channel.send(embed);
		}

		const name = args[0];
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);
        const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle(`**Name:** ${command.name}`)
            if (command.aliases) embed.addField('**Aliases:**', command.aliases.join(', '))
            if (command.description) embed.setDescription(command.description)
            if (command.usage) embed.addField('**Usage:**', command.usage)
        message.channel.send(embed);
	},
};
