import logo from './logo.svg';
import './App.css';
import Paymant from './Components/Paymant';
import { createContext, useState } from 'react';

export const CurrencyContext = createContext()
export const AmountContext = createContext(0)
function App() {

  const [currency,setCurrency] = useState("USD");
  const [amount,setAmount] = useState(0);

  const updateCurrency =()=>{
    setCurrency("EUR")
    console.log(currency)
  }

  const changeAmount = (value)=>{
     setAmount(value)
     console.log(amount)
  }

  
  return (
    <>
    <CurrencyContext.Provider value={{currency,updateCurrency}}>
      <AmountContext.Provider value={{amount,changeAmount}}>
        <Paymant/>
      </AmountContext.Provider>
      
      <input onInput={e => changeAmount(e.target.value)}/>
      <button onClick={updateCurrency}>Change currency</button>
    </CurrencyContext.Provider>
    
    </>
  );
}

export default App;
