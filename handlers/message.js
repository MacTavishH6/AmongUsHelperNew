var { AMbot, game, config } = require('../index');
const { Guild } = require('discord.js');

AMbot.on('message', async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = msg.content.slice(prefix.length).trim();
    let cmd;
    let param;
    if (args.includes(" ")) {
        cmd = args.substring(0, args.indexOf(" ")).toLowerCase().trim();
        param = args.slice(cmd.length).trim().toLowerCase();
        if (param.includes(' ')) {
            var temp = param.split(' ');
            param = [];
            param = temp;
        }
    } else cmd = args.toLowerCase().trim();

    let command;
    if (!msg.content.startsWith(prefix)) return;
    // msg.member.voice.channel.permissionsFor(bot.user).has("MANAGE_NICKNAMES")
    // let member = msg.member.voice.channel.members;
    // member.first().nickname.substring(0, member.first().nickname.indexOf("_"))
    // member.find(y => y.nickname != null && y.nickname.startsWith("M"));
    // let cmd = AMbot.commands.get(command.slice(prefix.length) || AMbot.aliases.get(cmdd => cmdd.aliases && cmdd.aliases.includes(command.slice(prefix.length))));
    let voice = msg.member.voice;
    // if (cmd) cmd.run(AMbot, msg, args, voice, start, inGame, Player, flag);
    if (AMbot.commands.has(cmd)) command = AMbot.commands.get(cmd);
    else command = AMbot.commands.get(AMbot.aliases.get(cmd));
    // console.log(args);
    // console.log(param);
    // console.log("cmd = " + cmd);
    // console.log("command = " + command);
    command.run(AMbot, msg, param, voice, game, config);
})