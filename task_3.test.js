const Calculator = require('./task_3.js')

describe('calcuator', () => {
  test('Add function works correctly', () => {
    // Arrange
    const calculator = new Calculator();
    const input = calculator.add(2,3)

    // Act
    const ouput = 5
    // Assert
    expect(input).toBe(ouput)
  })

  test('substract function works correctly', () => {
    // Arrange
    const calculator = new Calculator();
    const input = calculator.subtract(2,3)

    // Act
    const ouput = -1
    // Assert
    expect(input).toBe(ouput)
  })

  test('divide function works correctly', () => {
    // Arrange
    const calculator = new Calculator();
    const input = calculator.divide(3,2)

    // Act
    const ouput = 1.5
    // Assert
    expect(input).toBe(ouput)
  })

  test('multiply function works correctly', () => {
    // Arrange
    const calculator = new Calculator();
    const input = calculator.multiply(2,3)

    // Act
    const ouput = 6
    // Assert
    expect(input).toBe(ouput)
  })

  

})


