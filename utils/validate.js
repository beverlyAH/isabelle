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

const entryFeeIsValid = (entryFeeStr) => {
  var entryFee = entryFeeStr.replace(/,/g, "")

if (entryFee.length === 3) {
  if(parseInt(entryFee[0] + entryFee[1]) > 10) {
    return false
  }
} else if (entryFee.length === 5) {
  if(parseInt(entryFee) > 10000) {
    return false
  }
}
return true
}

module.exports = (args) => {
  if( args[1] === undefined || args[2] === undefined
    || args[3] === undefined || args[4] === undefined
    || args[5] === undefined) {
    return false
  }
  
  if(priceIsValid(args[1]) && dodoIsValid(args[2]) && args[3] && args[4] && entryFeeIsValid(args[5])) {
    return true
  }
  return false
}