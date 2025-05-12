import { clsx } from "clsx"

export default function Status({gameWon, gameLost, gameOver}){
  const gameStatusClass = clsx('status', {
    gameWon: gameWon,
    gameLost: gameLost
  })

  function gameStatus(){
    if(!gameOver){
      return null
    }
    if(gameWon){
      return (
        <>
        <h2>You Won</h2>
        <p>Well Done! 🎉</p>
      </>
      )
    }else{
      return (
        <>
        <h2>You Lost</h2>
        <p>You must learn Assembly 💀 </p>
      </>
      )
    }
  }
    
  return(
    <section className={gameStatusClass}>
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