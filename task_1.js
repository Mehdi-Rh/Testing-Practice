const stringLength = string => {
  const strLength = string.length
  if (strLength < 1 || strLength >10) {
    return "The string length is out range"
  }
  return strLength
}

module.exports = stringLength