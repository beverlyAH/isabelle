const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID

const deleteMessages = (msg, quantity) => {
  if(quantity) {
    msg.channel.fetchMessages({limit: quantity})
    .then(messages => {
      msg.channel.bulkDelete(messages)
    })
    .catch(err => {
      console.error(err)
    })
    return
  } else {
    msg.channel.fetchMessages({limit: 100})
    .then(messages => {
      msg.channel.bulkDelete(messages)
      .then(deleted => {
          msg.channel.fetchMessages({limit: 100})
          .then(messages => {
            if(messages.size > 1) {
              deleteMessages(msg)
            }
          }) 
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
}

module.exports = {
  name: '/delete',
  description: 'delete messages',
  execute(msg, args) {
    if(args[0]) {
      deleteMessages(msg, args[0])
      return
    }
    msg.channel.startTyping(msg.channel)
    if(msg.member.roles.has(ADMIN_ROLE_ID)) {
      deleteMessages(msg)
      setTimeout(() => {
        msg.channel.stopTyping(msg.channel)
      }, 3000)
    } else {
      msg.channel.send('Sorry, that command is for admins only!')
      msg.channel.stopTyping(msg.channel)
    }
  }
};