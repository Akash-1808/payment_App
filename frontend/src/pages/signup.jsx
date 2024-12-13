import axios from "axios"
import { useState } from "react"
import {Header} from "../components/header"
import {Inputbox} from "../components/inputbox"
import {Button1} from "../components/button"
import { useNavigate } from "react-router-dom"
import  {Bottomwarning} from "../components/bottomwarning"
// import { Appbar } from "../components/appbar"
 export const Signup =() =>{
        const [username,setusername] =useState({});
        const [lastname,setlastname] =useState({});
        const [password,setpassword] =useState({});
        const [firstname,setfirstname] =useState({}); 
        const navigate = useNavigate();   
    return(<div className="flex justify-center bg-slate-300 align-center pb-6 h-screen ">
        {/* <Appbar label={"PAYtm"}/> */}
        <div className="bg-slate-200 mt-6 pl-12 pr-12 h-3/4 flex flex-col justify-center">
            <Header label={"Signup"} ></Header>
            <Inputbox label={"Username:"} placeholder={"Enter vailed email"} onChange={
                (e)=>{setusername(e.target.value)}
            }/>
            <Inputbox label={"Firstname:"} placeholder={"Enter firstname"} onChange={(e)=>{setfirstname(e.target.value)}}/>
            <Inputbox label={"Lastname:"} placeholder={"Enter lastname"} onChange={(e)=>{setlastname(e.target.value)}}/>
            <Inputbox label={"Password:"} placeholder={"Create Password"} onChange={(e)=>{setpassword(e.target.value)}}/>
            <Button1 label={"Signup:"} onclick={async () =>{
                  const response =  await axios.post("http://localhost:3000/api/vi/user/signup",{
                        username,
                        firstname,
                        lastname,
                        password
                    })
                    
                    localStorage.setItem("token",response.data.token)
                    navigate("/dashboard")
            }}/>
            <Bottomwarning label={"Alredy have account?"} to={"/signin"} buttontext={"Signin"}/>
        </div>
    
    
    </div>)
}