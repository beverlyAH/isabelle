const validate = require('./validate.js')
const greeting = require('./greeting.js')
const LISTING_CHANNEL = process.env.LISTING_CHANNEL
const DAISY_ICON = process.env.DAISY_ICON

module.exports = (msg, args) => {
  if(!validate(args)) {
    error(msg)
    return
  }
  let code;
  if(args[2].toUpperCase() === 'DM') {
    code = `DM <@${msg.author.id}> for the code!`
  } else {
    code = args[2].toUpperCase()
  }
  msg.client.channels.get(LISTING_CHANNEL).send({
    embed: {
      color: 16697377,
      title: greeting(),
      thumbnail: {
        "url": `${DAISY_ICON}`
      },
      description: `Sow Joan's Stalk Market is **OPEN** on <@${msg.author.id}>'s island! :daisy:
      Daisy Mae is selling turnips in batches of ten for **${args[1]}** bells each!`,
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
          name: `**Want to visit?**`,
          value: `Let <@${msg.author.id}> know by reacting to this post with :bells:!`
        }
      ],
      timestamp: new Date()
      }
    }).catch(err => {
      console.error(err)
    })
  }