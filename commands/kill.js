const discord = require('discord.js');

module.exports.run = async(bot, msg, args, voice, game) => {
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
    if (args.length > 2) {
        var player = msg.mentions.members.forEach(x => {
            x.voice.setMute(true);
            game.kill(x.id);
            msg.channel.send('<@' + x.id + '> is killed!');
        });
    } else {
        var player = msg.mentions.members.first().id;
        msg.mentions.members.first().voice.setMute(true);
        game.kill(x.id);
        msg.channel.send('<@' + player + '> is killed!');
        configGame.config.Player.push(player);
    }
};

module.exports.help = {
    name: "kill",
    aliases: ["k"]
};