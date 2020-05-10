const { buy, sell, help } = require('../utils')

module.exports = {
  name: '/turnip',
  description: 'isabelle turnip command handler (...commandler)',
  execute(msg, args) {
    switch(args[0].toLowerCase()) {
      case 'sell':
        sell(msg, args)
        break;
      case 'buy':
        // validate args
        buy(msg, args)
        break;
      case 'help':
        help(msg, args);
        break;
      default:
        msg.channel.send('Sorry, I don\'t know what you mean!').catch(err => {
          console.error(err)
        })
        break;
    }
    return
  }
};