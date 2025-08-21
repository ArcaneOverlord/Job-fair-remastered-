import { useNavigate } from "react-router-dom";
function MenuItem({handleClick, name}) {
    const navigation=useNavigate();
    return <button onClick={() => navigation(`${handleClick}`)} className="hover:underline cursor-pointer">{name}</button>
}

export default MenuItem;