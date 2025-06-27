import readlineSync from 'readline-sync'

export const getName = () => {
  const askForName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
  return askForName
}

export const brainGames = () => {
  const name = getName()
  console.log(`Hello, ${name}!`)
}
