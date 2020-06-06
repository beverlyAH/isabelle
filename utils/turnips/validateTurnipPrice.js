const priceIsValid = (price) => {
  if ((typeof parseInt(price) !== 'number' && !parseInt(price).isNaN()) || price >= 1000) {
    return false
  } else {
    return true
  }
}

module.exports = priceIsValid