
export default function Languages({lang, wrongCounter}){
  
 const langDiv = lang.map((progLang, index) => {
 const isLost = index < wrongCounter
 
return <div className={`lang-div ${isLost ? "lost" : ''}`} key={progLang.name} 
 style={{backgroundColor: progLang.backgroundColor, color:progLang.color}}>{progLang.name}</div>})
  
  return(
    <section className="languages">
      {langDiv}
    </section>
  )
}