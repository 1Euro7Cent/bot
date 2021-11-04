module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log(`${client.user.tag} is now Horsting!`);
        client.user.setActivity({name: 'Horst', type: 'PLAYING'});
	},
};