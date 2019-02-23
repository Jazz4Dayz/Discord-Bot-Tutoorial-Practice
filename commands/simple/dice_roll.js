const commando = require('discord.js-commando');

class DiceRoll extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a 6 sided die.'
        })
    }

    async run(message, args){
        var diceRoll = Math.floor((Math.random()*6)+1);
        
        message.reply('You rolled a '+diceRoll);
    }
}

module.exports = DiceRoll;