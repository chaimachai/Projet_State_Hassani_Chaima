import "./Sidebar.sass"

export default function Sidebar({data, page,change, burger, setLanguage, language, plan, user}){
    return(
            <div className={`sidebar ${page !== 4 ? "nodisabled" : null} ${!burger ? "actifB" : null}`}>
                {
                    data.liste.map((item, index) => (
                        <div key={index} className={`div_sidebar ${(index <= page) || (index === 1 && user.name !== "" && user.email !== "" && user.number !== "") || ((index === 2 || index === 3) && user.name !== "" && user.email !== "" && user.number !== "" && plan !== "") ? "nodisabled" : null}`}>
                            <div className={`number ${page === index ? "actif" : null}`} onClick={() => change(index)}><p>{index + 1}</p></div>
                            <div className="nom" >
                                <p>{data.step} {index + 1}</p>
                                <h4>{item}</h4>
                            </div>
                        </div>
                    ))
                }
                <p className="language" onClick={()=>{language === "fr" ? setLanguage("en") : setLanguage("fr")}} >{language === "fr" ? "English" : "Francais"}</p>
            </div>
    )
}