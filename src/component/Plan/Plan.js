import "./Plan.sass"


export default function Plan({data, month, setMonth, setPlan, plan}){
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
                                    <h1>{item.name}</h1>
                                    <p>{month ? `${item.price}/mo` : `${item.price * 10}/yr`}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="periode">
                    <p className={month && "actif"} >Monthly</p>
                    <div className="btn_P" onClick={() => { setMonth(!month) }} >
                        <div style={month ? { left: "0.15rem" } : { right: "0.15rem" }} ></div>
                    </div>
                    <p className={!month && "actif"} >Yearly</p>
                </div>
            </div>
        </div>
    )
}