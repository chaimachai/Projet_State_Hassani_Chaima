import { useEffect, useState } from "react"
import "./Info.sass"

export default function Info({name, setName, email, setEmail, number, setNumber, user, setUser}){
    return(
        <div className="info step">
            <div className="title">
                <h1>Personal info</h1>
                <p>Please provide your name,email address,and phone number.</p>
            </div>
            <div className="div_main">
                <div className="input">
                    <label htmlFor="">Your name is: {name}</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Vingt-Six" />
                </div>
                <div className="input">
                    <label htmlFor="">Your email is: {email}</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="vingt_six@gmail.com" />
                </div>
                <div className="input">
                    <label htmlFor="">Your phone number is: {number}</label>
                    <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="e.g.+1 234 567 890" />
                </div>
            </div>
        </div>
    )
}