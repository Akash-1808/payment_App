// import { Appbar } from "../components/appbar"
import { useRecoilValue } from "recoil"
import id from "../components/idatom"
import { Header } from "../components/header"
import { Inputbox } from "../components/inputbox"
import { useEffect, useState } from "react"
import { Button1 } from "../components/button"
import axios from "axios"

export function Sendmoney (){
    const id1 =useRecoilValue(id)
    const [amount,setamount] = useState()
    // const navigate = useNavigate();
    console.log(amount,id1)

    return (<>
            <div className="flex bg-slate-300 align-center pb-6 h-screen justify-center ">
    
    <div className="bg-slate-200 mt-6 pl-12 pr-12 h-1/2 flex flex-col justify-center ">
    <Header label={"Send Money"}/><br />
    <Inputbox label={"Amount:"} placeholder={"Enter your vaild amount"} onChange={(e)=>{setamount(e.target.value)}}/>
    <Button1 label={"Transfer"} onclick={()=>{
       axios.post("http://localhost:3000/api/vi/account/transfer",
                {
                    data: {
                        to: id1,
                        amount: amount,
                      },
                 },{headers:{
                    'Content-Type': 'application/json',
                Authorization:"Bearer "+localStorage.getItem("token")
                }}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
        
    }}/>
    </div>
   
    </div>
    </>)
}


