const discord = require('discord.js');
const fs = require('fs');

module.exports.run = async(bot, msg, arg, voice, game, config) => {
    if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) {
        if (!arg || arg == "") return msg.channel.send(`Time is: ${config.time/1000} second!`);
        if (isNaN(arg)) {
            msg.channel.bulkDelete(1);
            return msg.channel.send("Please input the amount of time!");
        }
        config["time"] = arg * 1000;
        const json = JSON.stringify(config);
        fs.writeFile("config.json", json, (err) => {
            if (err) {
                console.log(err);
            }
        });
        msg.channel.send(`Time set to ${arg} second!`);
    } else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "changeTime",
    aliases: ["ct"]
};