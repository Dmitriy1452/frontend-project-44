import { mainRules } from '../index.js'
import { ranNum } from '../math-operations.js'

const expression = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
  }
}

const gameDescription = 'What is the result of the expression?'

export const calculating = () => {
  const operators = ['+', '-', '*']

  const firstNumber = ranNum(1, 100)
  const secondNumber = ranNum(1, 50)
  const index = ranNum(0, 1)
  const randOper = operators[index]

  const question = `${firstNumber} ${randOper} ${secondNumber}`
  const answer = expression(randOper, firstNumber, secondNumber).toString()

  return {
    question: question,
    correctAnswer: answer,
  }
}

mainRules(calculating, gameDescription)
