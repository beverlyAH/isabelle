require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const TOKEN = process.env.TOKEN;
const REACT_CHANNEL_ID = process.env.REACT_CHANNEL_ID;
const GUILD_ID = process.env.GUILD_ID;
const ROLE_REACT_MESSAGE_ID = process.env.ROLE_REACT_MESSAGE_ID;
const NORMIE_ID = process.env.NORMIE_ID;
const TIMELORD_ID = process.env.TIMELORD_ID;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});
bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.guilds.get(GUILD_ID).channels.get(REACT_CHANNEL_ID).fetchMessage(ROLE_REACT_MESSAGE_ID);
});

bot.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  console.log('reacting')
  if (emoji.name == 'blank') {
    // We don't have the member, but only the user...
    // Thanks to the previous part, we know how to fetch it
    console.log('correct emoji')
    message.guild.fetchMember(user.id).then(member => {
      console.log('adding normie role')
      member.addRole(NORMIE_ID);
    });
  }
  if (emoji.name == 'tardis') {
    // We don't have the member, but only the user...
    // Thanks to the previous part, we know how to fetch it
    console.log('correct emoji')
    message.guild.fetchMember(user.id).then(member => {
      console.log('adding timelord role')
      member.addRole(TIMELORD_ID);
    });
}
});

bot.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (emoji.name == 'blank') {
    message.guild.fetchMember(user.id).then(member => {
      console.log('removing normie role')
      member.removeRole(NORMIE_ID);
    });
  }
  if (emoji.name == 'tardis') {
    message.guild.fetchMember(user.id).then(member => {
      console.log('removing timelord role')
      member.removeRole(TIMELORD_ID);
    });
  }
});


bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
    console.info(`Called command: ${command} [arguments: ${args}]`);
  } catch (error) {
    console.error(error)
    msg.reply(`I don't know what that means! Sorry!`);
  }
});

