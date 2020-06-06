const validate = require('./validateTurnipListing.js')
const greeting = require('../greeting.js')
const BUYING_CHANNEL = process.env.BUYING_CHANNEL
const ICON_DAISY = process.env.ICON_DAISY

module.exports = (msg, args) => {
  if(!validate(args)) {
    error(msg, 'turnip')
    return
  }
  let code;
  if(args[2].toUpperCase() === 'DM') {
    code = `DM <@${msg.author.id}> for the code!`
  } else {
    code = args[2].toUpperCase()
  }
  msg.client.channels.get(BUYING_CHANNEL).send({
    embed: {
      color: 16697377,
      title: greeting(),
      thumbnail: {
        "url": `${ICON_DAISY}`
      },
      description: `Sow Joan\'s Stalk Market is **OPEN** on <@${msg.author.id}>'s island! ` +
      `Daisy Mae is selling turnips in batches of ten for **${args[1]}** bells each!`,
      fields:
      [
        {
          name: `**Dodo Code:**`,
          value: `**${code}**`,
          inline: true
        },
        {
          name: '**Duration:**',
          value: `**${args[3]} ${args[4]}**`,
          inline: true
        },
        {
          name: 'Entry Fee',
          value: `**${args[5]}**`,
          inline: true
        },
        {
          name: `**Want to visit?**`,
          value: `Let <@${msg.author.id}> know by reacting to this post with  <:turnip:708896970952933437>!`
        }
      ],
      timestamp: new Date()
      }
    }).catch(err => {
      console.error(err)
    })
  }