const { AMbot } = require('../index');
const config = require("../config.json");

AMbot.login(config.token);
AMbot.on('ready', async() => {
    console.log("This bot is Online!");
    AMbot.user.setActivity(config.activity.game, { type: "PLAYING" });
    AMbot.user.setStatus('online');
})