

const Form =({id,label,type,placeholder ,classlabel,classinput,value,onChange}) =>{
    return(
        <div>
            
                <label htmlFor={`${id}`} className={`${classlabel}`}>{label}</label><br />
                <input type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} className={`${classinput}`} value={value}
                onChange={onChange}></input>
                
                
            

        </div>
    )
};
export default Form;