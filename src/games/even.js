import { getName, isGameWon, getExpression, greeting, ranNum } from '../index.js'

const isEven = num => (num % 2 === 0) ? 'yes' : 'no'

export const checkIfEven = () => {
  const name = getName()
  console.log(greeting(name))
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

  let i = 3

  while (i > 0) {
    const randomNumber = ranNum()

    const correctAnswer = isEven(randomNumber)
    const question = getExpression(randomNumber)

    const result = isGameWon(question, correctAnswer)
    console.log(result.message)

    if (!result.isCorrect) {
      console.log(`Let's try again, ${name}!`)
      return
    }

    i -= 1
  }
  console.log(`Congratulations, ${name}!`)
}
