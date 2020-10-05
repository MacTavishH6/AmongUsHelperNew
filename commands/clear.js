const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (!arg || arg.includes(" ") || isNaN(arg)) {
        msg.channel.bulkDelete(1);
        return msg.channel.send("Please input the amount of message you want to delete!");
    }
    msg.channel.bulkDelete(arg);

};

module.exports.help = {
    name: "clear",
    aliases: ["cl"]
};