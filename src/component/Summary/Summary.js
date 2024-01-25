import { useState } from "react"
import "./Summary.sass"

export default function Summary({data, time, plan, option, setPage, promo10, setPromo10}){
    const [inputV, setInputV] = useState("")
    const [message, setMessage] = useState(false)
    let promo = (e) =>{
        if(e.target.id === "btn_input" || e.key === "Enter"){
            if(inputV.toLowerCase() === "promo10"){
                setPromo10(true)
                setMessage(false)
                setInputV("")
            }else{
                setMessage(true)
                setInputV("")
                setTimeout(()=>{setMessage(false)},3000)
            }
        }
    }
    let total = data.plan.cards[plan][time] + option.reduce((acc, item) => { return acc += data.picks.cards[item][time] }, 0)
    return(
        <div className="summary step">
            <div className="title">
                <h1>{data.summary.title.title}</h1>
                <p>{data.summary.title.subtitle}</p>
            </div>
            <div className="div_main">
                <div className="div_summary">
                    <div className="plans">
                        <div className="div_plan">
                            <h3>{data.plan.cards[plan].name}({time === "price/month" ? data.summary.general.monthly : data.summary.general.yearly})</h3>
                            <p>{data.summary.general.unit}{data.plan.cards[plan][time]}{time === "price/month" ? data.summary.general.mo : data.summary.general.yr}</p>
                        </div>
                        <p className="change" onClick={() => setPage(1)}>{data.summary.general.change}</p>
                    </div>
                    <div className="summary_options">
                        {
                            option.map((item, index) => (
                                <div key={index} className="summary_option" >
                                    <p>{data.picks.cards[item].name}</p>
                                    <p>+{data.summary.general.unit}{data.picks.cards[item][time]}{time === "price/month" ? data.summary.general.mo : data.summary.general.yr}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="promo">
                    <label htmlFor="">{data.summary.promo.title}: </label>
                    <input onKeyUp={promo} value={inputV} onChange={(e)=>setInputV(e.target.value)} type="text" placeholder={data.summary.promo.placeholder} />
                    <button id="btn_input" onClick={promo}>{data.summary.general.confirm}</button>
                    {message &&
                        <p className="error">{data.summary.general.message}!</p>
                    }
                </div>
                <div className="total">
                    <div className="div_total">
                        <p>{time === "price/month" ? data.summary.general.totalM : data.summary.general.totalY} {promo10 ? data.summary.promo.without : null}</p>
                        <p>{data.summary.general.unit}{total}{time === "price/month" ? data.summary.general.mo : data.summary.general.yr}</p>
                    </div>
                    {promo10 &&
                        <div className="div_promo">
                            <div>
                                <p>{data.summary.promo.promo10}</p>
                                <p>- {data.summary.general.unit}{total * 10 / 100}</p>
                            </div>
                            <div>
                                <p>{time === "price/month" ? data.summary.general.totalM : data.summary.general.totalY} {data.summary.promo.with}</p>
                                <p>{data.summary.general.unit}{total * 0.9}{time === "price/month" ? data.summary.general.mo : data.summary.general.yr}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}