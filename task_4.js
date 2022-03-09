const capitalize = string => {
  if (typeof string != 'string') {
    return "the argument should be a string"
  }
  return (string[0].toUpperCase()+string.substring(1))
}

module.exports = capitalize