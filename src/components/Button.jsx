import { useNavigate } from "react-router-dom";

const Button = ({style,label,handleClick,type,className,Btn}) => {
    const navigate=useNavigate();
    return(
        <div className={Btn}>
             <button onClick={() => navigate(`${handleClick}`)} style={style} type={type} className={`cursor-pointer 
        bg-[#06B6D4] dark:bg-[#0B7B8C] md:min-w-35 md:max-w-auto min-h-10 rounded-2xl text-black dark:text-white justify-center
        flex items-center ${className}`}>{label}</button>


        </div>)};

export default Button;