require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const dt = require('downloadtiktok');
const { generate } = require('random-words')

client.on('ready', async () => {
  console.log(`${client.user.username} is ready`);
});

const prefix = '.'

client.on('messageCreate', async (msg) => {
    if(msg.content.startsWith(`${prefix}test`)) {

        try {
            const link = msg.content.split(' ').slice(1);
            const result = await dt.downloadTiktok(link[0])
            const noWatermark = dt.filterNoWatermark(result.medias)
            msg.channel.send(noWatermark[0].url)
        } catch (err) {
            console.error(err)
        }
    }
});

client.on('messageCreate', async (msg) => {
    if (msg.content.startsWith(`${prefix}start`)) {
        setTimeout(() => {
            const  vanity = generate(1);
            msg.channel.send('discord.gg/' + vanity[0])
        }, 2000)}
    });


client.login(process.env.Token);