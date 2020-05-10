const validate = require('./validate.js')
const error = require('./error.js')
const greeting = require('./greeting.js')
const SELLING_CHANNEL = process.env.SELLING_CHANNEL
const NOOKLING_ICON = process.env.NOOKLING_ICON

module.exports = (msg, args) => {
  console.log(args)
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
  msg.client.channels.get(SELLING_CHANNEL).send({
    embed: {
      color: 16697377,
      title: greeting(),
      thumbnail: {
        "url": `${NOOKLING_ICON}`
      },
      description: `Nook's Corner is **OPEN** on <@${msg.author.id}>'s island! ` +
      `Timmy and Tommy are buying turnips for **${args[1]}** bells each!`,
      fields:
      [
        {
          name: `Dodo Code:`,
          value: `**${code}**`,
          inline: true
        },
        {
          name: 'Duration',
          value: `**${args[3]} ${args[4]}**`,
          inline: true
        },
        {
          name: 'Entry Fee',
          value: `**${args[5]}**`,
          inline: true
        },
        {
          name: `Want to visit?`,
          value: `Let <@${msg.author.id}> know by reacting to this post with <:bells:708896970604937269>!`
        }
      ],
      timestamp: new Date()
      }
  }).catch(err => {
    console.error(err)
  })
}