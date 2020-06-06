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
// turnipListing has its own entry fee validation bc it's the only one w/
// a 10k max - everything else is 5k

const dodoIsValid = require('../validateDodo.js')
const priceIsValid = require('./validateTurnipPrice.js')

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