import { useState } from "react"

import Header from "./Header"
import Status from "./Status"
import Languages from "./Languages"
import { languages } from "../assets/languages"
import Word from "./Word"
import Keyboard from "./Keyboard"

export default function Main(){
  
  const [currentWord, setCurrentWord] = useState('react')
  const [letter, setLetter] = useState([])
 
 const wrongCounter = letter.filter(keyLetter => !currentWord.includes(keyLetter)).length
  console.log(wrongCounter)

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
      <Status/>
      <Languages lang={languages}/>
      <section className="word-container">
      {wordDisplay}
      </section>
      <Keyboard getLetter={getLetter} currentWord={currentWord} letter={letter}/>
    </main>
  )
}