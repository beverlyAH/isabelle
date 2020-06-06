const ICON_ISABELLE = process.env.ICON_ISABELLE

module.exports = (msg, args) => {
  msg.channel.send({
    embed: {
    color: 16697377,
    title: 'Need help making a vendor listing?',
    thumbnail: {
      "url": `${ICON_ISABELLE}`
    },
    description: 'Here\'s what you need to know:',
    fields: [
      {
        name: '**Formatting:**',
        value: '**/vendor** <VENDOR> <DODO> <DURATION> <ENTRY FEE>'
      },
      {
        name: '**Vendors**',
        value: 'celeste | leif | kicks | saharah | redd'
      },
      {
        name: '**Examples**',
        value: '/vendor celeste ACY10 2 hours 5k\n' + 
        '/vendor redd ISAB0 1 hour none\n/vendor help'
      },
      {
        name: '**Note**',
        value: 'You can substitute DM if you don\'t want to include your Dodo Code, for example: /vendor saharah DM 1 hour 2000'
      },
      {
        name: '**Dodo Codes**',
        value: 'Must be only numbers and letters, and exactly 5 characters, for example **ACY10**.'
      },
      {
        name: '**Duration**',
        value: 'Example: 2 hours. Must be two values, a number and a unit of time.'
      },
      {
        name: '**Entry Fee**',
        value: 'Must be in one of two formats: a number, or number plus K. For example: ' +
        '5k, 5000, and 5,000 are all valid. Please put **none** if it\'s free entry! The maximum entry fee is **5K bells**. ' +
        'Please remember, charging more than the maximum is a **bannable offense**.'
      }
    ],
    timestamp: new Date
    }
  }).catch(err => {
    console.error(err)
  })
}