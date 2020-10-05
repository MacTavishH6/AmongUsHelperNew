const { AMbot } = require('../index');
const config = require("../config.json");

AMbot.login(config.token);
AMbot.on('ready', async() => {
    console.log(`${AMbot.user.username} is Online!`);
    AMbot.user.setActivity(`${config.activity.game} | !help`, { type: "PLAYING" });
})