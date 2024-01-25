import "./Summary.sass"

export default function Summary({time,plan,option, setPage}){
    return(
        <div className="summary step">
            <div className="title">
                <h1>Finishing up</h1>
                <p>Double check everything looks OK before confirming.</p>
            </div>
            <div className="div_main">
                <div className="div_summary">
                <div className="plans">
                    <div className="div_plan">
                        <h3>{plan.name}({time === "price/month" ? "Monthly" : "Yearly"})</h3>
                        <p>${plan[time]}{time === "price/month" ? `/mo` : `/yr`}</p>
                    </div>
                    <p className="change" onClick={() => setPage(1)}>Change</p>
                </div>
                <div className="summary_options">
                    {
                        option.map((item,index) => (
                            <div key={index} className="summary_option" >
                                <p>{item.name}</p>
                                <p>+${item[time]}{time === "price/month" ? `/mo` : `/yr`}</p>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="total">
                <p>Total (per {time === "price/month" ? "month" : "year"})</p>
                <p>${plan[time] + option.reduce((acc, item) =>{return acc += item[time]},0) }{time === "price/month"? `/mo` : `/yr` }</p>
                </div>
            </div>
        </div>
    )
}