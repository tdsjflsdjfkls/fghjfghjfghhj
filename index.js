const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
