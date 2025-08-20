

const Button = ({style,label,handleClick,className=""}) => {
    return <button onCLick={handleClick} style={style} className={`cursor-pointer ${className}`}>{label}</button>
};

export default Button;