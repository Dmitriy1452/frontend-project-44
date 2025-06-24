import { getName, greeting } from '../src/index.js'

export const brainGames = () => {
  const name = getName()
  console.log(greeting(name))
}
