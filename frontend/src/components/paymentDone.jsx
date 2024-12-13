import { Header } from "./header"

export function PaymentDone({amount}){
    return(
        <div className="flex bg-slate-300 align-center pb-6 h-screen justify-center ">
    
    <div className="bg-slate-200 mt-6 pl-12 pr-12 h-1/2 flex flex-col justify-center ">
    <Header label={"Payment done"}/><br />
    <div>{amount}</div>
    </div></div>)
}