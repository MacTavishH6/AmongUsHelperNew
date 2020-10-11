const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("DEAFEN_MEMBERS") && msg.member.voice.channel.permissionsFor(bot.user).has("MANAGE_NICKNAMES")) {
        if (game.start == 0) return msg.channel.send("Start a game first by typing \"!ptk\"!");
        var member = voice.channel.members;
        member.forEach(x => {
            if (x.bannable || x.user.bot) {
                let Nickname = x.nickname.substring(x.nickname.indexOf('_') + 1);
                x.setNickname(Nickname);
            }
            x.voice.setDeaf(false);
            x.voice.setMute(false);
        })
        game.finish();
        return msg.channel.send("The game is finish!");
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel, Deafen Member, and Manage Nickname ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "finishtebakkalimat",
    aliases: ["ftk"]
};