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
  console.log(letter)

const wordDisplay = currentWord.split('').map((word, index) => <Word word={word.toUpperCase()} key={index}/>)

function getLetter(newLetter){
  setLetter(prevLetter => [...prevLetter, newLetter])
  
}
 

  return(
    <main>
      <Header/>
      <Status/>
      <Languages lang={languages}/>
      <section className="word-container">
      {wordDisplay}
      </section>
      <Keyboard getLetter={getLetter}/>
    </main>
  )
}