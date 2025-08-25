import { useState } from "react";





function Password ({classlabel,label,id,classinput,value,onclick,placeholder,classadjust,imgclass}) {
    const [type,setType]=useState(true);
    const [eye,setEye]=useState(false);

    return(
        <div className={`${classadjust}`}>

              
                <label for={`${id}`} className={`${classlabel}`}>{label}</label><br />
               
                <input type={`${type? "password" : "text"}`} id={`${id}`} placeholder={`${placeholder}`} className={`${classinput}`} value={value}
                onClick={() =>(`${onclick}`)}></input>
             
                <img onClick={() => {setType(!type),setEye(!eye)}} src={`${eye? "./images/openeye.svg" : "./images/closedeye.svg"}`} 
                className={`inline-block ml-3 !text-[##515151] dark:text-white  ${imgclass} `}
                alt="show password" />
                

        </div>
    )
 }
 export default Password;
 