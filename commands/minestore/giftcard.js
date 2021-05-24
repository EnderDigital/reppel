const { prefix, minestore } = require('../../config/config.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'giftcard',
	description: 'Gets the status of a gift card.',
	guildOnly: true,
    usage: 'giftcard <code>',
	async execute(message, args) {
        message.channel.bulkDelete(1)
        if(minestore.enabled == "true") {
            var code = args;
            async function getrecent() {
                var json = await fetch(`${minestore.storeurl}/api/validGiftCard?code=${code}`).then(response => response.json())
                return json;
            }
            var json = await getrecent()
            var amount = json.amount;
            const embed2 = new Discord.MessageEmbed()
                .setColor('#ff00ff')
                .setTitle("Gift Card Status:")
                .addField('Amount:', amount, false)
                .addField('Code:', json.code, false)
            message.channel.send("I have sent you a DM!");
            message.author.send(embed2);
        }
	},
};