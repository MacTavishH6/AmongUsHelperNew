const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game, config) => {
    if (msg.channel.permissionsFor(bot.user).has("EMBED_LINKS") && msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
        const textHelp = {
                title: "Among Us Helper by MacTavishH6",
                author: {
                    name: "MacTavishH6",
                    icon_url: "https://bit.ly/30C8FyV"
                },
                description: "This is all command to run the bot:",
                fields: [{
                        name: ":white_check_mark: !play",
                        value: ":arrow_right: To start or resume game",
                        // inline: true
                    },
                    {
                        name: ":white_check_mark: !discuss",
                        value: ":arrow_right: To start discussion",
                        // inline: true
                    },
                    {
                        name: ":white_check_mark: !kill @[player]",
                        value: ":arrow_right: To kill player; you can kill more than 1 player",
                        // inline: true
                    },
                    {
                        name: ":white_check_mark: !undokill @[player]",
                        value: ":arrow_right: To resurrect player if you accidentally killed him; you can ressurect more than 1 player",
                    },
                    {
                        name: ":white_check_mark: !finish [i or c]",
                        value: ":arrow_right: To finish the game, you can choose i for Impostor or c for Crewmate.",
                        // inline: true
                    },
                    {
                        name: ":white_check_mark: !clear [number] (addition)",
                        value: ":arrow_right: To delete [number] of text.",
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
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to send embed links ;)");
    else return msg.author.send("Give me permission to send message and embed links please! ;)");
};

module.exports.help = {
    name: "help",
    aliases: ["h"]
};