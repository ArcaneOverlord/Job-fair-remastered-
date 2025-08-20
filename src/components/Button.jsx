import { useNavigate } from "react-router-dom";

const Button = ({style,label,handleClick,className=""}) => {
    const navigate=useNavigate();
    return <button onClick={() => navigate(`${handleClick}`)} style={style} className={`cursor-pointer ${className}`}>{label}</button>
};

export default Button;