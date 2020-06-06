const dodoIsValid = require('../validateDodo.js')
const entryFeeIsValid = require('../validateEntryFee.js')

module.exports = (args) => {
  if( args[1] === undefined || args[2] === undefined
    || args[3] === undefined || args[4] === undefined) {
    return false
  }
  if(dodoIsValid(args[1]) && args[2] && args[3] && entryFeeIsValid(args[4])) {
    return true
  }
  return false
}