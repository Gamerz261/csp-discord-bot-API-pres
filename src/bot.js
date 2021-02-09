// Run command: node ./src/bot.js

require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

clear();
// Log in the CONSOLE that the bot is up and running
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
});

// Message listeners
//
// current commands listed HERE --> https://docs.google.com/document/d/1-Hjqz8eYpUUahg8PEKJTsQmRETer3tlTzJSCQh3CRss/edit?usp=sharing
//
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
  if (message.content === '/msg') {
    message.reply('Look it is a message!');
    console.log("/msg was issued");
  }

  if (message.content === '/join') {
    if (vcCommand() == 1) {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        return;
      }
    }
  }
    // Only try to join the sender's voice channel if they are in one themselves
});

// Checks if the user issuing the command is in a VC
// takes in a command and runs it past the filters
function vcCommand() {
  if (message.member.voice.channel) {
    return(1);
  } else {
    message.reply('You need to join a voice channel first!');
    broadcast.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
    return(0);
  }
}
// Keep that console nice and tidy!
function clear() {
  console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
}

client.login(process.env.DISCORDJS_BOT_TOKEN);
