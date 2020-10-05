const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const { game } = require("./global.variable.js");

const AMbot = new Discord.Client();
AMbot.commands = new Discord.Collection();
AMbot.aliases = new Discord.Collection();
//For commands module initiation
require("./function")(AMbot);



module.exports = {
    AMbot: AMbot,
    game: game
}