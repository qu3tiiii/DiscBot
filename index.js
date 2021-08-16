const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('Listo', () => {
    console.log('Bot Listo');
    console.log('Loggeado como', client.user.tag)


    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)


});


client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === 'ping') {
        msg.reply('pong')
    }

    if (msg.content === 'xd') {
        msg.channel.send(`dx`);
    }

    if (msg.content.includes('who')) {
        msg.channel.send('fui creado por queti https://github.com/qu3tiiii');
    }


if (msg.content.includes('hola')) {
    msg.channel.send('xao');
}
    if (msg.content === '!how') {
        msg.channel.send('https://github.com/qu3tiiii');

    }

    if (msg.content === '!help') {
        const embed = new RichEmbed()
            .addField('ping', 'pong', true)
            .addField('xd', 'dx', true)
            .addField('who', 'respuesta sorpresa', true)
            .addField('hola', 'hola', true)
            .addField('!clean', 'borra casi todo xD', false)
            .setAuthor('qti', 'https://pbs.twimg.com/media/EDF5VH7XUAAayrA.jpg');
        msg.channel.send(embed);
    }

    // Borrar casi todo xD
    if (msg.content.startsWith('!clean')) {
        async function clear() {
            try {
                
                const fetched = await msg.channel.fetchMessages({limit: 99});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});

                //El token
const token = 'El token del bot va aca';
client.login(token);
