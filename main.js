require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const dt = require('downloadtiktok');

client.on('ready', async () => {
  console.log(`${client.user.username} is ready`);
});

const prefix = '.'

client.on('messageCreate', (msg, args) => {
    if(msg.content.startsWith(`${prefix}test`)) {

    const link = msg.content.split(' ').slice(1);
    msg.channel.send(link[0]);

    }
})


client.login(process.env.Token);