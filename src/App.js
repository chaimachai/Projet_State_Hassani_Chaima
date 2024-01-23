import React, { useState } from 'react';
import './App.sass';
import Sidebar from './component/Sidebar/Sidebar';
import Info from './component/Info/Info';
import Picks from './component/Picks/Picks';
import Plan from './component/Plan/Plan';
import data from "./data.json"
import Summary from './component/Summary/Summary';
import Thank from './component/Thank/Thank';
function App() {
  const [page, setPage] = useState(0)
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: ""
  })
  const [month, setMonth] = useState(true)
  const [plan, setPlan] = useState("")
  const [option, setOption] = useState([])
  const [total, setTotal] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  let change = ()=>{
    if(page === 0 && name !== "" && email !== "" && number !== ""){
      setPage(page + 1)
    }else if (page === 1 && plan !== "" ){
      setPage(page + 1)
    }else if (page === 2){
      setPage(page + 1)
    }
  }
  let changeS = (index)=>{
    if(page !== 4){
      if(index < page){
        setPage(index)
      }else if(index === 1 && name !== "" && email !== "" && number !== ""){
        setPage(index)
      }else if (index === 2 && plan !== "" ){
        setPage(index)
      }else if (index === 3 ){
        setPage(index)
      }
    }
  }
  return (
      <div className="App">
        <Sidebar page={page} change={changeS} />
        <div className="main">
          {page === 0 && <Info user={user} setUser={setUser} number={number} setNumber={setNumber} name={name} setName={setName} email={email} setEmail={setEmail}/>}
          {page === 1 && <Plan data={data.plan} plan={plan} setPlan={setPlan} month={month} setMonth={setMonth} />}
          {page === 2 && <Picks data={data.picks} total={total} setTotal={setTotal} month={month} setOption={setOption} option={option} />}
          {page === 3 && <Summary setPage={setPage} total={total} month={month} plan={plan} option={option} />}
          {page === 4 && <Thank />}
          <div className="button">
            {page !== 4 && <button className={`btn_back ${page === 0 ? "opacity" : null}`} onClick={() => setPage(page - 1)}>Go Back</button>}
            {page !== 3 && page !== 4 && <button className={`btn_next ${(page === 0 && (name === "" || email === "" || number === "")) || (page === 1 && plan === "" )? "disabled" : null}`} onClick={change}>Next Step</button>}
            {page === 3 && <button className='btn_confirm' onClick={() => setPage(4)}>Confirm</button>}
          </div>
        </div>
      </div>
  );
}

export default App;
