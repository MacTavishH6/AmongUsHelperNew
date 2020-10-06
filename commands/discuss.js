const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("MUTE_MEMBERS")) {
        if (!voice.channelID) return msg.channel.send("You must be in a voice channel!");
        if (game.start == 0) return msg.channel.send("Start a game first by typing \"!p\"!");
        if (game.inGame == 0) return msg.channel.send("Discussion already started!");
        game.inGame = 0;
        msg.channel.send("Discussion Start!");
        var member = voice.channel.members;
        let flag = true;
        member.forEach(x => {
            flag = true;
            if (game.Player.includes(x.id)) flag = false;
            if (flag == true) x.voice.setMute(false);
        });
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel and Mute Member ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "discuss",
    aliases: ["d"]
};