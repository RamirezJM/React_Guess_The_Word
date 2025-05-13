import { useState } from "react"

import Header from "./Header"
import Status from "./Status"
import Languages from "./Languages"
import { languages } from "../assets/languages"
import Word from "./Word"
import Keyboard from "./Keyboard"
import NewGameButton from "./NewGameButton"
import { getFarewellText } from "../assets/farewell"

export default function Main(){
  
  const [currentWord, setCurrentWord] = useState('react')
  const [letter, setLetter] = useState([])
 
 const wrongCounter = letter.filter(keyLetter => !currentWord.includes(keyLetter)).length

 const gameWon = currentWord.split('').every(keyLetter =>letter.includes(keyLetter))
 const gameLost = wrongCounter >= languages.length - 1
 const gameOver = gameWon || gameLost

 const lastLetter = letter[letter.length - 1]
 const isLastLetterIncorrect = lastLetter && !currentWord.includes(lastLetter)


 const wordDisplay = currentWord.split('').map((word, index) => <Word word={letter.includes(word) ? word.toUpperCase(): ''} key={index} />)

function getLetter(newLetter){
  setLetter(prevLetter => 
    prevLetter.includes(newLetter) ? prevLetter : [...prevLetter, newLetter]
  )
  return newLetter
}

 
  return(
    <main>
      <Header/>
      <Status gameWon={gameWon} gameLost={gameLost} gameOver={gameOver} wrongCounter={wrongCounter}
      isLastLetterIncorrect={isLastLetterIncorrect} getFarewellText={getFarewellText}/>
      <Languages lang={languages} wrongCounter={wrongCounter}/>
      <section className="word-container">
      {wordDisplay}
      </section>
      <Keyboard getLetter={getLetter} currentWord={currentWord} letter={letter} gameOver={gameOver}/>
      {gameOver && <NewGameButton/>}
    </main>
  )
}