import { User } from "../components/user"
import { Header } from "../components/header"
import { Button1 } from "../components/button"
import { Navbar } from "../components/navbar"
// import { Appbar } from "../components/appbar"
import { useNavigate } from "react-router-dom"
export function Dashboard (){
    const navigate =useNavigate()
    return (<div className="p-6">
        <div className="flex justify-end"><Button1 label={"Profile"} onclick={()=>{navigate("/profile")}} className="m-4"/></div>
    <div className="flex justify-center bg-slate-300 h-full ">
        <div className="p-4">
            <Header label={"Dashboard"}/>
            <User/>
        </div>   
    </div>
    
    </div>)
}