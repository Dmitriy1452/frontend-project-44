import { mainRules } from '../index.js'
import { ranNum } from '../math-operations.js'

const progression = (start, step, hiddenNum) => {
  const progrCount = 10
  const result = []

  for (let i = start; i < start + progrCount * step; i += step) {
    result.push(i)
  }

  const hiddenPos = result[hiddenNum]
  result[hiddenNum] = '..'

  return {
    expression: result.join(' '),
    answer: hiddenPos,
  }
}

const gameDescription = 'What number is missing in the progression?'

export const getProgression = () => {
  const start = ranNum(1, 100)
  const step = ranNum(1, 10)
  const hiddenNum = ranNum(1, 9)

  const question = progression(start, step, hiddenNum)
  const correctAnswer = question.answer.toString()

  return {
    question: question.expression,
    correctAnswer: correctAnswer,
  }
}

mainRules(getProgression, gameDescription)
