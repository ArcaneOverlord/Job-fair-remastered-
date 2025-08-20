

const EmployerTemplate = ({compImg,alt,companyName,roles,compLocation}) => {
    return(
        <div className="flex max-h-28 min-h-27 min-w-130 max-w-24 bg-[#0B1220] rounded-2xl items-center text-white gap-13 pl-5">
            <div className=" h-23 w-22 justify-center items-center overflow-hidden  bg-[#06B6D4] rounded-full">
                {compImg ?
               ( <img className="rounded-full flex object-cover h-full w-full"src={compImg} alt={alt}/>)
               : 
               (
                   <img className="rounded-full flex object-cover h-full w-full" 
                   src= "/public/images/compfallback.png"
                   alt="company"/>
     
               )}

            </div>

            <div className="justify-center  flex flex-col ">
                <p className="text-2xl">{companyName}</p>
                <p className="text-[#D9D9D9]">Open Roles:{roles}&nbsp; &bull; &nbsp;HQ:{compLocation}</p>

            </div>
            
        </div>
    )
};
export default EmployerTemplate;