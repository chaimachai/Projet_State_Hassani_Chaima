import "./Sidebar.sass"

export default function Sidebar({page,change}){
    const liste = ["YOUR INFO", "SELECT PLAN", "ADD-ONS","SUMMARY"]
    return(
        <div className={`sidebar ${page !== 4 ? "nodisabled" : null}`}>
            {
                liste.map((item, index)=>(
                    <div key={index} className="div_sidebar"> 
                        <div className={`number ${page === index ? "actif" : null}`} onClick={()=>change(index)}><p>{index + 1}</p></div>
                        <div className="nom" >
                            <p>STEP {index + 1}</p>
                            <h4>{item}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}