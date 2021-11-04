const { MessageEmbed, MessageActionRow, MessageButton, Interaction } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Displays all commands',
	execute(message, args) {
		let dt = new Date
		const helpEmb = new MessageEmbed()
		.setColor('#B452FF')
		.setTitle('Help menu')
		.setDescription(`Welcome to **Horst**, the easy and open-source programming language!\n \n**Command list:**\n \n`)
		.setThumbnail('https://i.ibb.co/NtvQ0KW/Frame-4horst.png')
		.setTimestamp(dt)
		.addFields(
			{ name: '⚒️Utilities', value: '`h!help` - Shows Horst commands/infos\n`h!feedback <feedback>` - Sends feedback to the Horst developers.'},
		)
		.setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL()}`)
		
		const links = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Website')
					.setStyle('LINK')
					.setURL('https://horstlang.org')
					.setDisabled('true'),
				new MessageButton()
					.setLabel('Docs')
					.setStyle('LINK')
					.setURL('https://docs.horstlang.org')
					.setDisabled('true')
			);		
	message.reply({embeds: [helpEmb], components: [links]});
	},
};