import { useState } from "react"
import "./Summary.sass"

export default function Summary({data,time,plan,option, setPage, promo10, setPromo10}){
    const [inputV, setInputV] = useState("")
    let promo = (e) =>{
        if((e.target.id === "btn_input" || e.key === "Enter") && inputV.toLowerCase() === "promo10"){
            setPromo10(true)
            setInputV("")
        }
    }
    let total = plan[time] + option.reduce((acc, item) => { return acc += item[time] }, 0)
    return(
        <div className="summary step">
            <div className="title">
                <h1>{data.title.title}</h1>
                <p>{data.title.subtitle}</p>
            </div>
            <div className="div_main">
                <div className="div_summary">
                    <div className="plans">
                        <div className="div_plan">
                            <h3>{plan.name}({time === "price/month" ? data.general.monthly : data.general.yearly})</h3>
                            <p>{data.general.unit}{plan[time]}{time === "price/month" ? data.general.mo : data.general.yr}</p>
                        </div>
                        <p className="change" onClick={() => setPage(1)}>{data.general.change}</p>
                    </div>
                    <div className="summary_options">
                        {
                            option.map((item, index) => (
                                <div key={index} className="summary_option" >
                                    <p>{item.name}</p>
                                    <p>+{data.general.unit}{item[time]}{time === "price/month" ? data.general.mo : data.general.yr}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="promo">
                    <label htmlFor="">{data.promo.title}: </label>
                    <input onKeyUp={promo} value={inputV} onChange={(e)=>setInputV(e.target.value)} type="text" placeholder={data.promo.placeholder} />
                    <button id="btn_input" onClick={promo}>{data.general.confirm}</button>
                </div>
                <div className="total">
                    <div className="div_total">
                        <p>{time === "price/month" ? data.general.totalM : data.general.totalY} {promo10 ? data.promo.without : null}</p>
                        <p>{data.general.unit}{total}{time === "price/month" ? data.general.mo : data.general.yr}</p>
                    </div>
                    {promo10 &&
                        <div className="div_promo">
                            <div>
                                <p>{data.promo.promo10}</p>
                                <p>- {data.general.unit}{total * 10 / 100}</p>
                            </div>
                            <div>
                                <p>{time === "price/month" ? data.general.totalM : data.general.totalY} {data.promo.with}</p>
                                <p>{data.general.unit}{total * 0.9}{time === "price/month" ? data.general.mo : data.general.yr}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}