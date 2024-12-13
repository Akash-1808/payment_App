import { Inputbox } from "./inputbox";
import { Button1 } from "./button";
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import id from "../components/idatom"
import { useRecoilState } from "recoil";

export function User(){

    const [user,setuser] = useState([]);
    const [filter,setfilter] =useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/vi/user/bulk?filter="+filter,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then(
            response=>{setuser(response.data.user)}
        )
    },[filter])
    
    return (<div className="">
        <Inputbox label={"Search User:"} placeholder={"Search user"} onChange={(e)=>{setfilter(e.target.value)}} className="flex justify-center"/> <br/>
    <div>{user.map(user1 => <User1 user1={user1}/>)}</div>
    </div>)
        
}

function User1({user1}){
    const navigate =useNavigate()
    const [,setid] =useRecoilState(id)
    return(<div className="flex grid grid-cols-6 bg-slate-200 p-6 m-3 ">
    <div className="col-span-1">
        {user1.firstname[0]}
    </div>
        <div className="col-span-3">
            {user1.firstname} {user1.lastname}
        </div>
        <Button1 onclick={()=>{
            setid(user1._id)
            navigate("/send")}} label={"Send money"} className="col-span-1"/>
    </div>)
}