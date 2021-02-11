const Discord = require('discord.js');

const client  = new Discord.Client();
let power     = true;
let runtime   = false;

try {
    client.once('ready', () => {
        console.log('Login!');
    });

    client.on('message', msg => {
        let cmd = msg.content.split(' ')[0];
        let val = msg.content.replace(`${cmd} `, '');

        if(msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && msg.content === ';power') {
            if(power === false) {
                power = true;
                msg.channel.send('`On: Power`');
            } else {
                power = false;
                msg.channel.send('`Off: Power`');
            }
        }

        else if(msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && msg.content === ';runtime') {
            if(runtime === false) {
                runtime = true;
                msg.channel.send('`On: Runtime`');
            } else {
                runtime = false;
                msg.channel.send('`Off: Runtime`');
            }
        }

        else if(power === true && msg.author.tag !== 'Vson#9403' && msg.author.tag === 'nolbo#4403' && cmd === ';;') {
            try {
                let start = new Date().getTime();
                msg.channel.send("```JavaScript\n" + eval(val) + "```");
                if(runtime === true) msg.channel.send('`Runtime: ' + new Date().getTime() - start + 'ms`');
            } catch(e) {
                msg.channel.send("```\n" + String(e) + "```");
            }
        }
    });
} catch(e) {
    client.on('message', msg => {
        msg.channel.send("```\n" + String(e) + "```");
        power = false;
    });
}


client.login(process.env.TOKEN);
