import "./Sidebar.sass"

export default function Sidebar({page, setPage}){
    const liste = ["YOUR INFO", "SELECT PLAN", "ADD-ONS","SUMMARY"]
    let hover = (e) => {
        e.currentTarget.style.backgroundColor = "hsl(206, 94%, 87%)"
        e.currentTarget.style.color = "black"
    }
    let leave_hover = (e) => {
        e.currentTarget.style.backgroundColor = "transparent"
        e.currentTarget.style.color = "white"
    }
    return(
        <div className="sidebar">
            {
                liste.map((item, index)=>(
                    <div key={index} className="div_sidebar"> 
                        <div className={`number ${page === index ? "actif" : null}`} onClick={()=>setPage(index)} onMouseOver={hover} onMouseLeave={leave_hover} ><p>{index + 1}</p></div>
                        <div className="nom" >
                            <p>STEP {index + 1}</p>
                            <h3>{item}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}