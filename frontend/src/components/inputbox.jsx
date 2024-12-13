export  function Inputbox({label,placeholder,onChange}){
    return(<div >
        <div className="font-medium text-slate-700 w-80">{label}</div>
    <input onChange={onChange} placeholder={placeholder} className="rounded-md p-2 w-80 mb-2"/></div>
        )
}