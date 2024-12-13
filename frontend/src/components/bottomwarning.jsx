import { Link } from "react-router-dom"
export function Bottomwarning ({label,to,buttontext}){
    return (<div className="flex space-x-2">
        <div className="">{label}</div>
        <Link to={to} className="text-blue-400">{buttontext}</Link>
    </div>)
}