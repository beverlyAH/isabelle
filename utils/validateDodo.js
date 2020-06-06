const dodoIsValid = (dodo) => {
  let alphanumeric = /^([0-9]|[a-z])+([0-9a-z]+)$/i
  if(!dodo.match(alphanumeric)) {
    return false
  } else if(dodo.length !== 5 && dodo !== 'DM') {
    return false
  } else {
    return true
  }
}

module.exports = dodoIsValid