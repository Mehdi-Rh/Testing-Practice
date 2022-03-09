const capitalize = require('./task_4.js')

describe('capitalize', () => {
  test('Test capitalize function', () => {
    // Arrange
    const str = "abc"

    // Act
    const output = 'Abc'

    // Assert
    expect(typeof str).toBe('string')
    expect(capitalize(str)).toBe(output)
  })

  test('Test capitalize function', () => {
    // Arrange
    const str = 5

    // Act
    const output = "the argument should be a string"

    // Assert
    expect(typeof str).toBe('number')
    expect(capitalize(str)).toBe(output)
  })


})
