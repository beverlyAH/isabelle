const greeting = require('../greeting.js')
const validate = require('./validateVendor.js')
const error = require('../error.js')
const ICON_CELESTE = process.env.ICON_CELESTE
const ICON_LEIF = process.env.ICON_LEIF
const ICON_KICKS = process.env.ICON_KICKS
const ICON_REDD = process.env.ICON_REDD
const ICON_SAHARAH = process.env.ICON_SAHARAH
const VENDOR_CHANNEL = process.env.VENDOR_CHANNEL

module.exports = (msg, args) => {

  const vendors = {
    celeste: {
      icon: ICON_CELESTE,
      description: `Celeste is stargazing on <@${msg.author.id}>'s island! Pick up a DIY recipe, or just say hi!`,
      emoji: ''
    },
    redd: {
      icon: ICON_REDD,
      description: `A mysterious ship has been spotted at <@${msg.author.id}>'s island! I've heard there are some good deals to be had!`,
      emoji: `<a:nookinc:708897011780288522>`
    },
    leif: {
      icon: ICON_LEIF,
      description: `Leif is selling flower seeds and bushes on <@${msg.author.id}>'s island! Beautify your island!`,
      emoji: ''
    },
    saharah: {
      icon: ICON_SAHARAH,
      description: `Saharah is wandering <@${msg.author.id}>'s island, selling flooring, wallpapers, and rugs!`,
      emoji: ''
    },
    kicks: {
      icon: ICON_KICKS,
      description: `Kicks is on <@${msg.author.id}>'s island, selling socks, shoes and bags! I wonder if he has anything that would go with my blouse...`,
      emoji: ''
    }
  }

  if(!validate(args)) {
    error(msg, 'vendor')
    return
  }

  let code;
  if(args[1].toUpperCase() === 'DM') {
    code = `DM <@${msg.author.id}> for the code!`
  } else {
    code = args[1].toUpperCase()
  }

  msg.client.channels.get(VENDOR_CHANNEL).send({
    embed: {
      color: 16697377,
      title: greeting(),
      thumbnail: {
        "url": vendors[args[0]].icon
      },
      description: vendors[args[0]].description,
      fields: [
        {
          name: '**Dodo Code**',
          value: `**${code}**`,
          inline: true
        },
        {
          name: '**Duration**',
          value: `**${args[2]} ${args[3]}**`,
          inline: true
        },
        {
          name: '**Entry Fee**',
          value: `**${args[4]}**`,
          inline: true
        },
        {
          name: '**Want to visit?**',
          value: `Let <@${msg.author.id}> know by reacting to this post with a ${vendors[args[0]].emoji}!`
        }
      ],
      timestamp: new Date
      }
  }).catch(err => {
    console.error(err)
  })
}