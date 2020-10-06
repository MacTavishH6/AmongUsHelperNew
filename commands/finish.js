const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("MUTE_MEMBERS")) {
        if (game.start == 0) return msg.channel.send("Start a game first by typing \"!p\"!");
        var member = voice.channel.members;
        member.forEach(x => {
            x.voice.setMute(false);
        })
        game.finish();
        if (arg) {
            if (arg[0] == "i") return msg.channel.send("Impostor win the game!");
            else if (arg[0] == "c") return msg.channel.send("Crewmate win the game!");
            else return msg.channel.send("The game is finish!");
        } else
            return msg.channel.send("The game is finish!");
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel and Mute Member ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "finish",
    aliases: ["f"]
};