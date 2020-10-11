const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("DEAFEN_MEMBERS") && msg.member.voice.channel.permissionsFor(bot.user).has("MANAGE_NICKNAMES")) {
        if (!voice.channelID) return msg.channel.send("You must be in a voice channel!");
        if (game.start == 0) {
            return msg.channel.send("Start a game first by typing \"!p\"!");
        }
        var player = msg.author.id;
        let member = voice.channel.members;
        var botCounter = 0;
        member.forEach(x => {
            if (x.user.bot) botCounter++;
        });
        let DonePlayer = game.getDonePlayer();
        if ((DonePlayer + 1) == (member.size - botCounter)) return msg.channel.send("Please type \"!ftk\"!");
        let nextPlayer = member.find(y => y.nickname != null && y.nickname.startsWith((DonePlayer + 2).toString()));
        nextPlayer.voice.setMute(false);
        nextPlayer.voice.setDeaf(false);
        let DoneDonePlayer = member.find(y => y.nickname != null && y.nickname.startsWith((DonePlayer).toString()));
        DoneDonePlayer.voice.setMute(true);
        game.nextPlayer();
        setTimeout(() => {
            msg.channel.send("<@" + player + ">Next Please!");
        }, 30000);
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel, Deafen Member, and Manage Nickname ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "nexttebakkalimat",
    aliases: ["ntk"]
};