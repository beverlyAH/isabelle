module.exports = (msg, args) => {
  msg.channel.send({
    embed: {
    color: 16697377,
    title: 'Need help making a turnip listing?',
    description: 'Here\'s what you need to know:',
    fields: [
      {
        name: '**Formatting:**',
        value: '**/turnip** <FLAG> <PRICE> <DODO> <DURATION> <ENTRY FEE>'
      },
      {
        name: '**Flags**',
        value: 'buy **|** sell **|** help'
      },
      {
        name: '**Examples**',
        value: '/turnip sell 450 ACY10 2 hours 10k\n' + 
        '/turnip buy 90 ACY10 1 hour none\n/turnip help'
      },
      {
        name: '**Note**',
        value: 'You can substitute DM if you don\'t want to include your Dodo Code, IE:\n/turnip sell 450 DM 1 hour'
      },
      {
        name: '**Dodo Codes**',
        value: 'Must be only numbers and letters, and exactly 5 characters, for example **ACY10**.'
      },
      {
        name: '**Prices**',
        value: 'Prices must be 1 or more bells, and 999 or less.'
      },
      {
        name: '**Duration**',
        value: 'Example: 2 hours. Must be two values, a number and a unit of time.'
      },
      {
        name: '**Entry Fee**',
        value: 'Must be in one of two formats: a number, or number plus K. For example: ' +
        '10k, 10000, and 10,000 are all valid. Please put **none** if it\'s free entry! The maximum entry fee is **10K bells**. ' +
        'Please remember, charging more than the maximum is a **bannable offense**.'
      }
    ],
    timestamp: new Date
    }
  }).catch(err => {
    console.error(err)
  })
}