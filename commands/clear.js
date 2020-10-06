const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.channel.permissionsFor(bot.user).has("READ_MESSAGE_HISTORY") && msg.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES")) {
        if (!arg || arg.includes(" ") || isNaN(arg)) {
            msg.channel.bulkDelete(1);
            return msg.channel.send("Please input the amount of message you want to delete!");
        }
        msg.channel.bulkDelete(arg);
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Read Message History and Manage Message ;)");
    else return msg.author.send("Give me permission to send message please! ;)");

};

module.exports.help = {
    name: "clear",
    aliases: ["cl"]
};