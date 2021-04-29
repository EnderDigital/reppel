const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'darkjoke',
	description: 'Sends a very racist dark joke!',
	execute(message, args) {
         async function run(){
           const { joke } = await fetch('https://v2.jokeapi.dev/joke/Dark?type=single').then(response => response.json());
           var randomColor = Math.floor(Math.random()*16777215).toString(16);
           const embed = new Discord.MessageEmbed()
           .setColor("#"+randomColor)
           .setDescription(joke)
           message.channel.send(embed);
         }
        run()
	},
};
