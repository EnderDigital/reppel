module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	guildOnly: true,
    permissions: 'BAN_MEMBERS',
    usage: '@user (reason)',
	execute(message, args) {
        var member= message.mentions.members.first() || message.guild.members.get(args[0])
        // Ban
        member.ban({reason: args}).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
	},
};
