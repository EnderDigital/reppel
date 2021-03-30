module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	guildOnly: true,
    permissions: 'KICK_MEMBERS',
    usage: '@user (reason)',
	execute(message) {
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(`:wave: ` + member.displayName + ` has been successfully kicked for ${args[2]}:point_right: `);
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
	},
};
