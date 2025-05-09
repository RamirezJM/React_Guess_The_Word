
export default function Languages({lang}){
  
 const langDiv = lang.map(prog => <div className="lang-div" key={prog.name} 
 style={{backgroundColor: prog.backgroundColor, color:prog.color}}>{prog.name}</div>)
  
  return(
    <section className="languages">
      {langDiv}
    </section>
  )
}