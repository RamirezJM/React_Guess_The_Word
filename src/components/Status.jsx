import { clsx } from "clsx"
import { languages } from "../assets/languages"

export default function Status({gameWon, gameLost, gameOver, wrongCounter, isLastLetterIncorrect, getFarewellText}){
  const gameStatusClass = clsx('status', {
    gameWon: gameWon,
    gameLost: gameLost,
    farewell: !gameOver && isLastLetterIncorrect
  })

  function gameStatus(){
    if(!gameOver && isLastLetterIncorrect){
      return <p className="farewell-message">{getFarewellText(languages[wrongCounter - 1].name)}</p>
    }
    if(gameWon){
      return (
        <>
        <h2>You Win!</h2>
        <p>Well Done! 🎉</p>
      </>
      )
    }if(gameLost){
      return (
        <>
        <h2>Game Over!</h2>
        <p>You must learn Assembly 💀 </p>
      </>
      )
    }
    return null
  }
    
  return(
    <section className={gameStatusClass} aria-live="polite" role="status">
      {gameStatus()}
    
     {/*  
     
     ***** alternativa con operador terciario ******
     
     {gameOver ? (
        gameWon ? (
          <>
            <h2>You Won</h2>
            <p>Well Done! 🎉</p>
          </>
        ) : (
          <>
            <h2>You Lost</h2>
            <p>You must learn Assembly 💀 </p>
          </>
        )
      ) : (
        null
      )

    } */}
     
    </section>
  )
}