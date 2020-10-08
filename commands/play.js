const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("MUTE_MEMBERS")) {
        if (!voice.channelID) return msg.channel.send("You must be in a voice channel!");
        if (game.inGame == 1) return msg.channel.send("Game already started!");
        if (game.start == 1 && game.inGame == 1) return msg.channel.send("Game is already start or you not yet finished the game Please type \"!finish\"");
        else {
            if (game.start == 0) {
                var player = msg.author.id;
                msg.channel.send("<@" + player + "> Start the game!");
                game.startGame();
            } else {
                msg.channel.send("The game started again!");
                game.startAgain();
            }
        }
        let member = voice.channel.members;
        let flag = true;
        member.forEach(x => {
            flag = true;
            if (game.Player.includes(x.id) || x.roles.cache.has("BOT")) flag = false;
            if (flag == true) {
                x.voice.setMute(true);
            }
        });
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel and Mute Member ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "play",
    aliases: ["p"]
};