

const Textarea = ({label,id,placeholder,rows,cols,name,value,classinput,onChange,classlabel}) => {
    return(
        <div>
            <label htmlFor="id" className={classlabel}>{label}</label><br/>

<textarea id={id} name={name} rows={rows} cols={cols} placeholder={placeholder} value={value} wrap="soft" className={`${classinput}`}
onChange={onChange}>
</textarea>
        </div>
    
    )
};
export default Textarea;