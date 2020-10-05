const { AMbot, game } = require('../index');
const config = require("../config.json");

AMbot.on('message', async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = msg.content.slice(prefix.length).trim();
    let cmd;
    let param;
    if (args.includes(" ")) {
        cmd = args.substring(0, args.indexOf(" ")).toLowerCase().trim();
        param = args.slice(cmd.length).trim();
    } else cmd = args.toLowerCase().trim();

    let command;
    if (!msg.content.startsWith(prefix)) return;
    // let cmd = AMbot.commands.get(command.slice(prefix.length) || AMbot.aliases.get(cmdd => cmdd.aliases && cmdd.aliases.includes(command.slice(prefix.length))));
    let voice = msg.member.voice;
    // if (cmd) cmd.run(AMbot, msg, args, voice, start, inGame, Player, flag);
    if (AMbot.commands.has(cmd)) command = AMbot.commands.get(cmd);
    else command = AMbot.commands.get(AMbot.aliases.get(cmd));
    // console.log(args);
    // console.log(param);
    // console.log("cmd = " + cmd);
    // console.log("command = " + command);
    command.run(AMbot, msg, param, voice, game);
})