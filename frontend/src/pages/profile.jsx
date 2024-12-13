import { Header } from "../components/header"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Button1 } from "../components/button"
import { Bottomwarning } from "../components/bottomwarning"
export function Profile(){
    const navigate = useNavigate()

    return(
        <div className="flex justify-center bg-slate-300 align-center pb-6 h-screen ">
        {/* <Appbar label={"PAYtm"}/> */}
        <div className="bg-slate-200 mt-6 pl-12 pr-12 h-3/4 flex flex-col justify-center">
            <Header label={"Profile"} ></Header>
            <Profile1/>
            <Button1 label={"Logout"} onclick={()=>{
                navigate("/signin")
                localStorage.removeItem("token")}}/>
                <Bottomwarning label={"Go back to"} buttontext={"Dashbord"} to={"/dashboard"}/>
            </div>
            </div>
    )
}


function Profile1(){
    const [user,setuser] = useState({})
        useEffect( ()=>{
            axios.get("http://localhost:3000/api/vi/user/",{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            }).then((response)=>{setuser(response.data.user)})
        } ,[])
        
   return(<>
            <br/>
            <div className="text-2xl">{user.username}</div><br/>
            <div className="flex justify-center font-bold text-3xl">{user.intialAmount}</div>
            </>
        
    )
}