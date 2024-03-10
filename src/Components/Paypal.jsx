import { useContext } from "react"
import Paymant from "./Paymant"
import { AmountContext, CurrencyContext } from "../App"
import { CURRENCIES } from "./Utils/CurrencyUtils";



const Paypal = () =>{

    const currency = useContext(CurrencyContext);
    const amount = useContext(AmountContext);
    
    return(
        <>
         <p>{currency.currency}: {amount.amount}= {amount.amount * CURRENCIES[currency.currency]} RSD</p>
        </>
    )
}

export default Paypal