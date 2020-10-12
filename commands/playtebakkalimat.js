const discord = require('discord.js');

module.exports.run = async(bot, msg, arg, voice, game, config) => {
    if (msg.member.voice.channel.permissionsFor(bot.user).has("VIEW_CHANNEL") && msg.member.voice.channel.permissionsFor(bot.user).has("DEAFEN_MEMBERS") && msg.member.voice.channel.permissionsFor(bot.user).has("MANAGE_NICKNAMES")) {
        if (!voice.channelID) return msg.channel.send("You must be in a voice channel!");
        if (game.inGame == 1) return msg.channel.send("Game already started!");
        if (game.start == 1 && game.inGame == 1) return msg.channel.send("Game is already start or you not yet finished the game Please type \"!ftk\"");
        let member = voice.channel.members;
        let number, flag;
        let newMember = member.filter(y => !(y.nickname != null && y.nickname.substring(0, y.nickname.indexOf("_") + 1).toLowerCase() == "mod_"));
        if (game.start == 0) {
            if (newMember.size <= 2) {
                return msg.channel.send("Not enough Player!");
            }
            var player = msg.author.id;
            msg.channel.send("<@" + player + "> Start the game!");
            game.startGame();
        }
        member.forEach(x => {
            if (!x.user.bot && !(x.nickname != null && x.nickname.substring(0, x.nickname.indexOf("_") + 1).toLowerCase() == "mod_")) {
                flag = true;
                while (flag) {
                    number = Math.floor(Math.random() * Math.floor(newMember.size)) + 1;
                    if (!game.Player.includes(number)) {
                        if (x.bannable) {
                            if (x.nickname == null)
                                x.setNickname(number.toString() + "_" + x.displayName.toString());
                            else x.setNickname(number.toString() + "_" + x.nickname.toString());
                        }

                        if (number != 1 && number != 2) {
                            x.voice.setDeaf(true);
                            x.voice.setMute(true);
                        }
                        game.kill(number);
                        flag = false;
                    }
                }
            }
        });
        game.sortPlayer();
        setTimeout(() => {
            msg.channel.send("<@" + player + "> Next Please!");
        }, config.time + 5000);
    } else if (msg.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return msg.channel.send(":negative_squared_cross_mark: Please give me permission to see Voice Channel, Deafen Member, and Manage Nickname ;)");
    else return msg.author.send("Give me permission to send message please! ;)");
};

module.exports.help = {
    name: "tebakkalimat",
    aliases: ["ptk"]
};