const entryFeeIsValid = (entryFeeStr) => {
  var entryFee = entryFeeStr.replace(/,/g, "")
  
  if(entryFee[entryFee.length - 1].toLowerCase() === 'k') {
    var lastChar = entryFee.split('').splice(entryFee.length - 1, 1).join('')
    console.log(lastChar)
    console.log(parseInt(entryFee))
    if(parseInt(entryFee) > 5) {
      return false
    }
  }

  if(parseInt(entryFee) > 5000) {
    return false
  }

  return true
}

module.exports = entryFeeIsValid
