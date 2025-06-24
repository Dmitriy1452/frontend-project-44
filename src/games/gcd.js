import { getName, isGameWon, getExpression, greeting, ranNum } from '../index.js'

const hasGcd = (num1, num2) => {
  const min = (num1 > num2) ? num2 : num1
  const max = (num1 > num2) ? num1 : num2

  let a = max
  let b = min

  if (min === 0) {
    return a
  }

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

const getGcd = () => {
  const name = getName()
  console.log(greeting(name))
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 3; i > 0; i -= 1) {
    const firstNumber = ranNum()
    const secondNumber = ranNum()
    const randomExp = `${firstNumber} ${secondNumber}`

    const question = getExpression(randomExp)
    const correctAnswer = hasGcd(firstNumber, secondNumber).toString()

    const result = isGameWon(question, correctAnswer)
    console.log(result.message)

    if (!result.isCorrect) {
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default getGcd
