export  function Button1 ({onclick,label}){
    return(<>
    <br/>
    <button className={"bg-slate-500 p-2 rounded-md text-white"}  onClick={onclick}>{label}</button></>)
}