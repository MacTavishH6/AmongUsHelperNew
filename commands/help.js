const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    var text = "";
    text += "This is all command to run me:\n";
    text += "!p => To start or resume game,\n";
    text += "!d => To start discussion,\n";
    text += "!k @[player] => To kill player; you can kill more than 1 player,\n";
    text += "!f [i or c] => To finish the game, you can choose i for Impostor or c for Crewmate.\n";
    text += "Let's start playing! XD";

    return msg.channel.send(text);
};

module.exports.help = {
    name: "help",
    aliases: ["h"]
};