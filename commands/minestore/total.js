const { prefix, minestore } = require('../../config/config.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'total',
	description: 'Gets a certain payment.',
    guildOnly: true,
    permissions: ["ADMINISTRATOR"],
    usage: 'total <1 and above>',
	async execute(message, args) {
        if(minestore.enabled == "true") {
            var code = args[0];
            async function getrecent() {
                var json = await fetch(`${minestore.storeurl}/api/getTotalPayments`).then(response => response.json())
                return json;
            }
            var json = await getrecent()
            var json = json[code];
            var amount = json.amount
            var username = json.user
            var date = json.date
            var package = json.date
            const embed2 = new Discord.MessageEmbed()
                .setColor('#ff00ff')
                .setTitle("Payment:")
                .addField('Amount: ', amount, false)
                .addField('Username: ', username, false)
                .addField('Package: ', package, false)
                .setFooter('Payment Date: '+date)
            message.channel.send(embed2);
        }
	},
};