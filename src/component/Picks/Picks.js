import "./Picks.sass"
export default function Picks({data, month,setOption, option, total, setTotal}){
    let change = (objet) =>{
        if(option.includes(objet)){
            setOption(option.filter(element => element !== objet))
            setTotal(total - objet.price)
        }else{
            setOption([...option, objet])
            setTotal(total + objet.price)
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
                    <div className={`option ${option.includes(item) ? "actif" : null}`} key={index}>
                        <div className="div_option">
                            <input type="checkbox" checked={option.includes(item) ? true : false} onChange={()=>change(item)} />
                            <div className="info">
                                <h2>{item.name}</h2>
                                <p>{item.texte}</p>
                            </div>
                        </div>
                        <p>+${month ? `${item.price}/mo`:`${item.price*10}/yr`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}