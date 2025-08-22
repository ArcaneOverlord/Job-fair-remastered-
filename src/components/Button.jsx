import { useNavigate } from "react-router-dom";

const Button = ({style,label,handleClick,className=""}) => {
    const navigate=useNavigate();
    return <button onClick={() => navigate(`${handleClick}`)} style={style} className={`cursor-pointer 
        bg-[#06B6D4] dark:bg-[#0B7B8C] min-w-35 min-h-10 rounded-2xl text-black dark:text-white justify-center
        flex items-center ${className}`}>{label}</button>
};

export default Button;