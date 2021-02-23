module.exports = {
	name: 'warn',
	description: 'Tag a member and warn them.',
	guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
	execute(message) {
        var member= message.mentions.members.first();
        // Kick
            // Successmessage
            message.channel.send(member.displayName + " - You have been warned!");
	},
};
