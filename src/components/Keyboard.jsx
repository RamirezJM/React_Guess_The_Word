
export default function Keyboard({getLetter}){

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const keys = alphabet.split('').map(key => <button className="key" key={key} onClick={() => getLetter(key)}>
    {key.toUpperCase()}</button>)
  
  return(
    <section className="keyboard">
      {keys}
    </section>
  )
}