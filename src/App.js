import React, { useState } from 'react';
import './App.sass';
import Sidebar from './component/Sidebar/Sidebar';
import Info from './component/Info/Info';
import Picks from './component/Picks/Picks';
import Plan from './component/Plan/Plan';
import data from "./data.json"
import Summary from './component/Summary/Summary';
function App() {
  const [page, setPage] = useState(0)
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Sidebar page={page} setPage={setPage} />
      <div className="main">
        {page === 0 && <Info data={data.info} />}
        {page === 1 && <Plan data={data.plan}  />}
        {page === 2 && <Picks data={data.picks} />}
        {page === 3 && <Summary />}
        {show && 
        <div className='finished'>
          <h1>Thank You !</h1>
          <p></p>
        </div> }
        <div className="button">
          {page !== 0 && <button onClick={()=>setPage(page - 1)} >Go Back</button> }
          {page !== 3 && <button onClick={()=>setPage(page + 1)} >Next Step</button> }
          {page === 3 && <button onClick={()=>{setShow(true); setPage()}} >Confirm</button> }
        </div>
      </div>
    </div>
  );
}

export default App;
