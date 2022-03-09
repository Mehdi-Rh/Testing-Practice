const reverseString = require('./task_2')

test('test if the string is reversed correctly', () => {
  // Arrange
  const string_1 = "abc"
  const string_2 = "aaaaa-bbbbb-cccccc"
  const string_3 = ""

  // Act
  const strReversed_1 = "cba"
  const strReversed_2 = "cccccc-bbbbb-aaaaa"
  const strReversed_3 = ""

  // Assert
  expect(reverseString(string_1)).toBe(strReversed_1)
  expect(reverseString(string_2)).toBe(strReversed_2)
  expect(reverseString(string_3)).toBe(strReversed_3)

}) 