const stringLength = require('./task_1.js')

test('Test if the string length is correct', () => {
  // Arrange
  const string_1 = "abc"
  const string_2 = "aaaaabbbbbcccccc"
  const string_3 = ""

  // Act
  const length_1 = string_1.length
  const length_2 = "The string length is out range"
  const length_3 = "The string length is out range"
  // Assert
  expect(stringLength(string_1)).toBe(length_1)
  expect(stringLength(string_2)).toBe(length_2)
  expect(stringLength(string_3)).toBe(length_3)
})