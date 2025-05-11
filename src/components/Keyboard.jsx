import { clsx } from "clsx"

export default function Keyboard({getLetter, currentWord, letter}){

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const keys = alphabet.split('').map(key => {
    const isGuessed = letter.includes(key)
    const isCorrect = isGuessed && currentWord.includes(key)
    const isWrong = isGuessed && !currentWord.includes(key)
    
    const keyClass = clsx({
      correct: isCorrect, 
      wrong: isWrong
    })
 

    return (<button className={keyClass} key={key} onClick={() => getLetter(key)}>
    {key.toUpperCase()}</button>)})
  
   
  
  return(
    <section className="keyboard">
      {keys}
    </section>
  )
}