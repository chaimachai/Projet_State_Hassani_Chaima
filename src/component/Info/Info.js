import "./Info.sass"

export default function Info({user, setUser, data}){
    return(
        <div className="info step">
            <div className="title">
                <h1>{data.title.title}</h1>
                <p>{data.title.subtitle}</p>
            </div>
            <div className="div_main">
                {
                    data.input.map((item, index)=>(
                        <div className="input" key={index}>
                            <label htmlFor="">{item.phrase} {user[item.name]}</label>
                            <input type={item.type} value={user[item.name]} onChange={(e) => setUser({ ...user, [item.name]: `${e.target.value}` })} placeholder={item.placeholder} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}