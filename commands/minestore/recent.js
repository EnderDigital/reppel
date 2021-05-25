const { prefix, minestore } = require('../../config/config.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const getSymbolFromCurrency = require('currency-symbol-map')
module.exports = {
	name: 'recent',
	description: 'Gets the most recent payment from the store.',
	guildOnly: true,
    usage: '',
	async execute(message, args) {
        if(minestore.enabled == "true") {
            async function getrecent() {
                var json = await fetch(`${minestore.storeurl}/api/getMostRecent`).then(response => response.json())
                return json;
            }
            var json = await getrecent()
            var currency = await fetch("https://pro.minestorecms.com/api/getMainCurrency").then(response => response.text())
            var currency = await getSymbolFromCurrency(currency)
            var amount = json.amount;
            var date = json.date;
            var package = json.package;
            var discountused = json.discountused;
            if(discountused == "true") {
                var discountused = "Yes"
            }else{
                var discountused = "No"
            }
            const embed2 = new Discord.MessageEmbed()
                .setColor('#ff00ff')
                .setTitle("Most recent payment:")
                .addField('Amount:', currency+amount, false)
                .addField('Package:', package, false)
                .addField('Discount:', discountused, false)
                .setFooter('Payment Date: '+date);
            message.channel.send(embed2);
        }
	},
};