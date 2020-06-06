const { vendorHelp, vendor } = require('../utils')

module.exports = {
  name: '/vendor',
  description: 'vendor handler (vendler)',
  execute(msg, args) {
    // if a valid flag
    if(args[0].toLowerCase() === 'redd' ||
      args[0].toLowerCase() === 'celeste' ||
      args[0].toLowerCase() === 'saharah' ||
      args[0].toLowerCase() === 'leif' ||
      args[0].toLowerCase() === 'kicks') {
        // run vendor handler
        msg.channel.startTyping(msg.channel)
        vendor(msg, args)
        msg.channel.stopTyping(msg.channel)
      } else {
        // other cases are help, and invalid
        switch(args[0].toLowerCase()) {
          case 'help':
            msg.channel.startTyping(msg.channel)
            vendorHelp(msg, args)
            msg.channel.stopTyping(msg.channel)
          default:
            msg.channel.send('Sorry, I don\'t know what you mean!')
              .catch(err => {
                console.error(err)
              })
            break;
        }
      }
    return;
  }
};