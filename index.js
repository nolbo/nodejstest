const Discord = require('discord.js');

const client  = new Discord.Client();
let power = true;

try {
    client.once('ready', () => {
        console.log('Login!');
    });

    client.on('message', msg => {
        let cmd = msg.content.split(' ')[0];
        let val = msg.content.replace(`${cmd} `, '');

        if(power === false && msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && msg.content === 'on') {
            power = true;
            msg.channel.send('`On`');
        }

        else if(power === true && msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && cmd === ';;') {
            try {
                msg.channel.send("```JavaScript\n" + eval(val) + "```");
            } catch(e) {
                msg.channel.send(String(e));
            }
        }
    });
} catch(e) {
    client.on('message', msg => {
        msg.channel.send(String(e));
        power = false;
    });
}


client.login(process.env.TOKEN);
