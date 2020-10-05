const fs = require("fs");

module.exports = (AMbot) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) return console.log("There are no events to load...");
        console.log(`Loading ${jsFiles.length} events...`);
        jsFiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i+1}: ${f} loaded!`);
        });
    });


    fs.readdir('./commands/', (err, files) => {
        if (err) console.error(err);
        let jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) return console.log("There are no commands to load...");
        console.log(`Loading ${jsFiles.length} commands...`);
        jsFiles.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            console.log(`${i+1}: ${f} loaded!`);
            AMbot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                AMbot.aliases.set(alias, props.help.name);
            });
        });
    });
};