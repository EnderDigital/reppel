module.exports = {
	name: 'exceptionhandler',
	description: 'exceptionhandler!',
	execute(message, args) {
		throw new Error('Ran out of coffee');
	},
};