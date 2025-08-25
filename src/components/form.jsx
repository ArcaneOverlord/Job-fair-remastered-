

const Form =({id,label,type,placeholder ,classlabel,classinput,value,onclick}) =>{
    return(
        <div>
            
                <label htmlFor={`${id}`} className={`${classlabel}`}>{label}</label><br />
                <input type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} className={`${classinput}`} value={value}
                onClick={() =>(`${onclick}`)}></input>
                
                
            

        </div>
    )
};
export default Form;