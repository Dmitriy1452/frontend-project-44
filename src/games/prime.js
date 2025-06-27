import { mainRules } from '../index.js'
import { ranNum } from '../math-operations.js'

const isPrime = (num) => {
  if (num < 2) {
    return 'no'
  }

  if (num === 2) {
    return 'yes'
  }

  if (num % 2 === 0) {
    return 'no'
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"'

export const getPrimeNumber = () => {
  const randomNumber = ranNum(1, 50)

  const question = randomNumber
  const correctAnswer = isPrime(randomNumber)

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

mainRules(getPrimeNumber, gameDescription)
