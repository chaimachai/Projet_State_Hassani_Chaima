import React, { useState } from 'react';
import './App.sass';
import data from "./data.json";
import Sidebar from './component/Sidebar/Sidebar';
import Info from './component/Info/Info';
import Plan from './component/Plan/Plan';
import Picks from './component/Picks/Picks';
import Summary from './component/Summary/Summary';
import Thank from './component/Thank/Thank';
import moon from "./assets/img/moon.svg";
import sun from "./assets/img/sun.svg";
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [page, setPage] = useState(0);
  const [time, setTime] = useState("price/month");
  const [plan, setPlan] = useState("");
  const [option, setOption] = useState([]);
  const [burger, setBurger] = useState(true);
  const [dark , setDark] = useState(false);
  const [promo10, setPromo10] = useState(false);
  const [language, setLanguage] = useState("fr");
  let change = ()=>{
    if(page === 0 && user.name !== "" && user.email !== "" && user.number !== ""){
      setPage(page + 1)
    }else if (page === 1 && plan !== "" && user.name !== "" && user.email !== "" && user.number !== "" ){
      setPage(page + 1)
    }else if (page === 2){
      setPage(page + 1)
    }
  }
  let changeS = (index)=>{
    if(page !== 4){
      if(index <= page){
        setPage(index);
        setBurger(true)
      }else if(index === 1 && user.name !== "" && user.email !== "" && user.number !== ""){
        setPage(index);
        setBurger(true)
      }else if ((index === 2 || index === 3) && user.name !== "" && user.email !== "" && user.number !== "" && plan !== ""){
        setPage(index);
        setBurger(true)
      }
    }
  }
  return (
    <div className={dark ? "App darkM" : "App"}>
      <div className={burger ? "menu_bg" : "menu_bg actifB"} onClick={() => setBurger(!burger)} >
        <span></span><span></span><span></span>
      </div>
      <img className={dark ? "dark mode" : "light mode"} src={dark ? moon : sun} onClick={() => setDark(!dark)} alt="dark mode" />
      <Sidebar data={data[language].sidebar} plan={plan} user={user} setLanguage={setLanguage} language={language} page={page} burger={burger} change={changeS} />
      <div className="main">
        {page === 0 && <Info data={data[language].info} user={user} setUser={setUser} />}
        {page === 1 && <Plan data={data[language].plan} plan={plan} setPlan={setPlan} time={time} setTime={setTime} />}
        {page === 2 && <Picks data={data[language].picks} time={time} setOption={setOption} option={option} />}
        {page === 3 && <Summary data={data[language].summary} promo10={promo10} setPromo10={setPromo10} setPage={setPage} time={time} plan={plan} option={option} />}
        {page === 4 && <Thank data={data[language].thank} />}
        <div className="button">
          {page !== 4 && <button className={`btn_back ${page === 0 ? "opacity" : null}`} onClick={() => setPage(page - 1)}>{data[language].button.back}</button>}
          {page !== 3 && page !== 4 && <button className={`btn_next ${(page === 0 && (user.name === "" || user.email === "" || user.number === "")) || (page === 1 && plan === "") ? "disabled" : null}`} onClick={change}>{data[language].button.next}</button>}
          {page === 3 && <button className='btn_confirm' onClick={() => setPage(4)}>{data[language].button.confirm}</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
