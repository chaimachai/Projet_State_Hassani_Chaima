import "./Plan.sass"


export default function Plan({data, time, setTime, setPlan, plan}){
    return(
        <div className="plan step">
            <div className="title">
                <h1>Select you plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="div_main">
                <div className="cards">
                    {
                        data.map((item, index) => (
                            <div className={`card ${plan === item ? "actif" : null}`} onClick={() => setPlan(item)} key={index}>
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="texte">
                                    <h2>{item.name}</h2>
                                    <p>${item[time]}{time === "price/month" ? `/mo` : `/yr`}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="periode">
                    <p className={time === "price/month" ? "actif" : null} >Monthly</p>
                    <div className="btn_P" onClick={() => {time === "price/month" ? setTime("price/year") : setTime("price/month")}} >
                        <div style={time === "price/month" ? { transform: "translate(0.2rem)" } : { transform: "translate(1.8rem)" }} ></div>
                    </div>
                    <p className={time === "price/year" ? "actif" : null} >Yearly</p>
                </div>
            </div>
        </div>
    )
}