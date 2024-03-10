import logo from './logo.svg';
import './App.css';
import Paymant from './Components/Paymant';
import { createContext, useState } from 'react';
import { CURRENCIES } from './Components/Utils/CurrencyUtils';

export const CurrencyContext = createContext()
export const AmountContext = createContext(0)
function App() {

  const [currency,setCurrency] = useState("USD");
  const [amount,setAmount] = useState(0);

  const updateCurrency =(currency)=>{
    setCurrency(currency)
    
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
      <select  onChange={e =>updateCurrency(e.target.value)}>
         {Object.keys(CURRENCIES).map(currency=>(
          <option key={currency} value={currency}>{currency}</option>
         ))}

      </select>
    </CurrencyContext.Provider>
    
    </>
  );
}

export default App;
