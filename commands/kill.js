const discord = require('discord.js');

module.exports.run = async(bot, msg, args, voice, game) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("MUTE_MEMBERS")) {
        if (game.start == 0 && game.inGame == 0) {
            return msg.channel.send("Start a game first by typing \"!p\"!");
        }
        if (!args) {
            msg.channel.bulkDelete(1);
            return msg.channel.send("Please tag a dead player!");
        }
        if (!msg.mentions.members.first()) {
            return msg.channel.send("You have to @ one player!");
        }
        if (args.length > 1) {
            var player = msg.mentions.members.forEach(x => {
                x.voice.setMute(true);
                game.kill(x.id);
                msg.channel.send('<@' + x.id + '> is killed!');
            });
            return;
        } else {
            var player = msg.mentions.members.first().id;
            msg.mentions.members.first().voice.setMute(true);
            game.kill(x.id);
            msg.channel.send('<@' + player + '> is killed!');
            configGame.config.Player.push(player);
            return;
        }
    } else if (msg.channel.permissionsFor(bot.user).has(bot.user)) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel and Mute Member ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "kill",
    aliases: ["k"]
};