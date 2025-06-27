import readlineSync from 'readline-sync'
import { getName } from '../src/cli.js'

export const getExpression = num => readlineSync.question(`Question: ${num}\nYour answer: `).toLowerCase().trim()

export const mainRules = (gameRules, gameDescription) => {
  const name = getName()
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  for (let i = 3; i > 0; i -= 1) {
    const result = gameRules()
    const userAnswer = (getExpression(result.question))

    if (userAnswer !== result.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'\nLet's try againg, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
