const Discord = require('discord.js');

const client  = new Discord.Client();
let power = true;

client.once('ready', () => {
    console.log('Login!');
});

client.on('message', msg => {
    try {
        let cmd = msg.content.split(' ')[0];
        let val = msg.content.replace(`${cmd} `, '');

        if(power === true && msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && cmd === ';;'){
            msg.channel.send(eval(val));
        }
    } catch(e) {
        msg.channel.send(e);
        power = false;
    }
});

client.login(process.env.TOKEN);
