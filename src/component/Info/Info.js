import "./Info.sass"

export default function Info({user, setUser, data}){
    return(
        <div className="info step">
            <div className="title">
                <h1>Personal info</h1>
                <p>Please provide your name,email address,and phone number.</p>
            </div>
            <div className="div_main">
                {
                    data.map((item, index)=>(
                        <div className="input" key={index}>
                            <label htmlFor="">Your {item.name === "number" && "phone"} {item.name} is : {user[item.name]}</label>
                            <input type={item.type} value={user[item.name]} onChange={(e) => setUser({ ...user, [item.name]: `${e.target.value}` })} placeholder={item.placeholder} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}