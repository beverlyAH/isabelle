const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID

module.exports = {
  name: '/!isabelle',
  description: 'Get a message from Isabelle!',
  execute(msg, args) {
    let channel = args[0].replace(/\D/g,'');
    let message;

    if(!msg.member.roles.has(ADMIN_ROLE_ID)) {
      return;
    }

    if(channel && channel.length === 18) {
      message = args.slice(1).join(' ')
      msg.client.channels.get(channel).send(message)
      .catch(err => {
        console.error(err)
      })
    } else {
      message = args.join(' ')
      msg.channel.send(message)
      .catch(err => {
        console.error(err)
      })
    }
  }
}

let embed = {
  embed: {
    color: 16697377,
    title: 'Welcome, everyone!',
    description: 'My name is Isabelle, and I\'m in charge of Resident Services here at Nook Outpost!\n' +
    '\n' + 'Here, we make sure everyone\'s registered properly, and give out their assignments!\nNow, let me see...\n' +
    '\n' + 'I\'m told some people travel through time! How amazing. Those who do, we call _Time Lords._ Now, if you prefer to experience your timeline the way everyone else does, we\'d call you a Normie! ' +
    'Whichever describes you best, please react to this message with the proper emoji!',
    fields: [
      {
        name: 'Time Lord',
        value: '<:tardis:702723834494713897>',
        inline: true
      },
      {
        name: 'Normie',
        value: '<:blank:702723834037403673>',
        inline: true
      }
    ]
  }
}