module.exports = (msg) => {
  msg.channel.send({
    embed: {
    color: 16697377,
    description: 'Oops! Did you forget something? Try **/turnip help** for more information!',
    timestamp: new Date
    }
  }).catch(err => {
    console.error(err)
  })
}