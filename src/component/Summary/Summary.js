import "./Summary.sass"

export default function Summary({month,plan,option, setPage, total}){
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
                        <h3>{plan.name}({month ? "Monthly" : "Yearly"})</h3>
                        <p>${month ? `${plan.price}/mo` : `${plan.price * 10}/yr`}</p>
                    </div>
                    <p className="change" onClick={() => setPage(1)}>Change</p>
                </div>
                <div className="summary_options">
                    {
                        option.map((item,index) => (
                            <div key={index} className="summary_option" >
                                <p>{item.name}</p>
                                <p>+${month ? `${item.price}/mo` : `${item.price*10}/yr`}</p>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="total">
                <p>Total (per {month ? "month" : "year"})</p>
                <p>${month? `${plan.price + total}/mo` : `${(plan.price + total)*10}/yr` }</p>
                </div>
            </div>
        </div>
    )
}