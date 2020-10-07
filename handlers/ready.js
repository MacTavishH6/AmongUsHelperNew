const { AMbot } = require('../index');
const config = require("../config.json");

AMbot.login(config.token);
AMbot.on('ready', async() => {
    console.log(`${AMbot.user.username} is Online!`);
    AMbot.user.setActivity(`Invite_me ${config.activity.game} | !help`);
})