const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const token = 'NTQ4NTU2NjA5NTg5MjE1MjMy.D1HCvw.G3ysI26tgkmkytIB3bkmyNsR52Y';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.resgisterDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.channel.sendMessage('Hello, '+ message.author +', how are you?');
    }
});

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(token);