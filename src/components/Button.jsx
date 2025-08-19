

const Button = ({style,label,handleClick,className=""}) => {
    return <button onCLick={handleClick} style={style} className={`${className}`}>{label}</button>
};

export default Button;