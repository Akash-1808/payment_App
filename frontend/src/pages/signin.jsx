
import axios from "axios"
import { useState } from "react"
import { Header } from "../components/header"
import { Inputbox } from "../components/inputbox"
import { Button1 } from "../components/button"
import { useNavigate } from "react-router-dom"
import { Bottomwarning } from "../components/bottomwarning"
// import { Appbar } from "../components/appbar"

export  function Signin (){
    const [username,setusername] = useState();
    const [password,setpassword] = useState();
    const navigate = useNavigate();
    return (<>
    <div className="flex bg-slate-300 align-center pb-6 h-screen justify-center ">
    {/* <Appbar label={"PAYtm"}/> */}
    <div className="bg-slate-200 mt-6 pl-12 pr-12 h-1/2 flex flex-col justify-center ">
    <Header label={"Singin"}/>
    <Inputbox label={"Username:"} placeholder={"Enter your vaild email"} onChange={(e)=>{setusername(e.target.value)}}/>
    <Inputbox label={"Password:"} placeholder={"Enter your password"} onChange={(e)=>{setpassword(e.target.value)}}/>
    <Button1 label={"Signin"} onclick={
        async () =>{
           const response = await axios.post("http://localhost:3000/api/vi/user/signin",{
                username,
                password
            })
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
        }
    }/>
    <Bottomwarning to={"/signup"} label={"Don't have an Account?"} buttontext={"Signup"}/>
    </div></div></>)
}