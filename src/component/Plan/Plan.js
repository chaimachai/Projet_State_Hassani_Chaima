import { useState } from "react"
import "./Plan.sass"


export default function Plan({data}){
    const [month, setMonth] = useState(true)
    return(
        <div className="plan">
            <div className="title">
                <h1>Select you plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="cards">
                {
                    data.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.img} alt="" />
                            <h1>{item.name}</h1>
                            <p>{month ? `${item.price}/mo` : `${item.price*10}/yr`}</p>
                        </div>
                    ))
                }
            </div>
            <div className="periode">
                <p className={month && "actif"} >Monthly</p>
                <div className="btn_P" onClick={()=>setMonth(!month)} >
                    <button></button>
                </div>
                <p className={!month && "actif"} >Yearly</p>
            </div>
        </div>
    )
}