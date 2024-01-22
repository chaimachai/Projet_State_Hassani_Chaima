import { useEffect, useState } from "react"
import "./Info.sass"

export default function Info({data}){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    useEffect(()=>{
        data.name = name
        data.email = email
        data.phone = number
    },[name, email, number])
    return(
        <div className="info">
            <div className="title">
                <h1>Personal info</h1>
                <p>Please provide your name,email address,and phone number.</p>
            </div>
            <form>
                <div className="input">
                    <label htmlFor="">Your name is:{name}</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Vingt-Six" />
                </div>
                <div className="input">
                    <label htmlFor="">Your email is:{email}</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="vingt_six@gmail.com" />
                </div>
                <div className="input">
                    <label htmlFor="">Your phone number is:{number}</label>
                    <input type="text" onChange={(e)=>setNumber(e.target.value)} placeholder="e.g.+1 234 567 890" />
                </div>
            </form>
        </div>
    )
}