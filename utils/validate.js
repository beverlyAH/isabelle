const priceIsValid = (price) => {
  if ((typeof parseInt(price) !== 'number' && !parseInt(price).isNaN()) || price >= 1000) {
    return false
  } else {
    return true
  }
}

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

module.exports = (args) => {
  if( args[1] === undefined || args[2] === undefined
    || args[3] === undefined || args[4] === undefined
    || args[5] === undefined) {
    return false
  }
  
  if(priceIsValid(args[1]) && dodoIsValid(args[2]) && args[3] && args[4]) {
    return true
  }
  return false
}