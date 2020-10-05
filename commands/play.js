const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game) => {
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
        if (game.Player.includes(x.id)) flag = false;
        if (flag == true) {
            x.voice.setMute(true);
        }
    });
};

module.exports.help = {
    name: "play",
    aliases: ["p"]
};