import { useContext } from "react"
import Paymant from "./Paymant"
import { AmountContext, CurrencyContext } from "../App"



const Paypal = () =>{

    const Currency = useContext(CurrencyContext);
    const value = useContext(AmountContext);
    console.log(Currency,value);
    return(
        <>
         <p>Paypal</p>
        </>
    )
}

export default Paypal