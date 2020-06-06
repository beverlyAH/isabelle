const { buy, sell, turnipHelp } = require('../utils')

module.exports = {
  name: '/turnip',
  description: 'isabelle\'s turnip command handler (...commandler)',
  execute(msg, args) {
    switch(args[0].toLowerCase()) {
      case 'sell':
        msg.channel.startTyping(msg.channel)
        setTimeout(() => {
          sell(msg, args)
          msg.channel.stopTyping(msg.channel)
        }, 2000)
        break;
      case 'buy':
        msg.channel.startTyping(msg.channel)
        setTimeout(() => {
          buy(msg, args)
          msg.channel.stopTyping(msg.channel)
        }, 2000)
        break;
      case 'help':
        msg.channel.startTyping(msg.channel)
        turnipHelp(msg, args);
        msg.channel.stopTyping(msg.channel)
        break;
      default:
        msg.channel.send('Sorry, I don\'t know what you mean!')
          .catch(err => {
            console.error(err)
          })
        break;
    }
    return
  }
};