module.exports = (msg, flag) => {
  msg.channel.send({
    embed: {
    color: 16697377,
    description: `Oops! You might have forgotten something, or a flag was invalid. Try **/${flag} help** for more information!`,
    timestamp: new Date
    }
  }).catch(err => {
    console.error(err)
  })
}