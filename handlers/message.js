const { AMbot, game } = require('../index');
const config = require("../config.json");

AMbot.on('message', async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = msg.content.slice(prefix.length).trim();
    let cmd = args[0].toLowerCase().trim();
    let param = args.slice(1).trim();
    let command;
    if (!msg.content.startsWith(prefix)) return;
    // let cmd = AMbot.commands.get(command.slice(prefix.length) || AMbot.aliases.get(cmdd => cmdd.aliases && cmdd.aliases.includes(command.slice(prefix.length))));
    let voice = msg.member.voice;
    // if (cmd) cmd.run(AMbot, msg, args, voice, start, inGame, Player, flag);
    if (AMbot.commands.has(cmd)) command = AMbot.commands.get(cmd);
    else command = AMbot.commands.get(AMbot.aliases.get(cmd));
    console.log(args[1]);
    console.log("cmd = " + cmd);
    console.log("command = " + command);
    command.run(AMbot, msg, param, voice, game);
    // switch (args[0]) {
    //     case "clear":
    //         if (!args[1]) {
    //             msg.channel.bulkDelete(1);
    //             msg.channel.send("Please input the amount of message you want to delete!");
    //             break;
    //         }
    //         if (isNaN(args[1])) {
    //             msg.channel.send("Please input the amount of message you want to delete!");
    //             break;
    //         }
    //         msg.channel.bulkDelete(args[1]);
    //         break;
    //     case "help":
    //         msg.channel.send("This is all command to run me:");
    //         msg.channel.send("type : !p => To start or resume game,");
    //         msg.channel.send("type : !d => To start discussion,");
    //         msg.channel.send("type : !k @[player] @[player] => To kill player; you can kill more than 1 player,");
    //         msg.channel.send("type : !f [i or c] => To finish the game, you can choose i for Impostor or c for Crewmate.");
    //         msg.channel.send("Let's start playing! XD");
    //         break;
    // }

})