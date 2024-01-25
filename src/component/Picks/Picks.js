import "./Picks.sass"
export default function Picks({data, time,setOption, option}){
    let change = (objet) =>{
        if(option.includes(objet)){
            setOption(option.filter(element => element !== objet))
        }else{
            setOption([...option, objet])
        }
    }
    return(
        <div className="picks step">
            <div className="title">
                <h1>Picks add-ons</h1>
                <p>Add-on help enhance your gaming experience</p>
            </div>
            <div className="div_main">
                {data.map((item,index)=>(
                    <div className={`option ${option.includes(item) ? "actif" : null}`} onClick={()=>change(item)} key={index}>
                        <div className="div_option" >
                            <input type="checkbox" checked={option.includes(item) ? true : false}/>
                            <div className="info">
                                <h2>{item.name}</h2>
                                <p>{item.texte}</p>
                            </div>
                        </div>
                        <p>+${item[time]}{time === "price/month" ? `/mo`:`/yr`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}