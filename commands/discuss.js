const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
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
};

module.exports.help = {
    name: "discuss",
    aliases: ["d"]
};