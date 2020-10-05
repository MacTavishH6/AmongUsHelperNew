const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {

    const textHelp = {
            title: "Among Us Helper by MacTavishH6",
            author: {
                name: "MacTavishH6",
                icon_url: "https://bit.ly/30C8FyV"
            },
            description: "This is all command to run the bot:",
            fields: [{
                    name: "!play",
                    value: "=> To start or resume game",
                    // inline: true
                },
                {
                    name: "!discuss",
                    value: "=> To start discussion",
                    // inline: true
                },
                {
                    name: "!kill @[player]",
                    value: "=> To kill player; you can kill more than 1 player",
                    // inline: true
                },
                {
                    name: "!finish [i or c]",
                    value: "=> To finish the game, you can choose i for Impostor or c for Crewmate.",
                    // inline: true
                },
                {
                    name: "!clear [number] (addition)",
                    value: "=> To delete [number] of text.",
                }
            ],
            footer: {
                text: "Let's start playing! XD"
            }
        }
        // var text = "";
        // text += "This is all command to run me:\n";
        // text += "!p => To start or resume game,\n";
        // text += "!d => To start discussion,\n";
        // text += "!k @[player] => To kill player; you can kill more than 1 player,\n";
        // text += "!f [i or c] => To finish the game, you can choose i for Impostor or c for Crewmate.\n";
        // text += "Let's start playing! XD";

    return msg.channel.send({ embed: textHelp });
};

module.exports.help = {
    name: "help",
    aliases: ["h"]
};