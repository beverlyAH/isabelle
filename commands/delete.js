const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID

const deleteMessages = (msg) => {
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

module.exports = {
  name: '/delete',
  description: 'delete messages',
  execute(msg, args) {
    if(msg.member.roles.has(ADMIN_ROLE_ID)) {
      deleteMessages(msg)
    } else {
      msg.channel.send('Sorry, that command is for admins only!')
    }
  }
};