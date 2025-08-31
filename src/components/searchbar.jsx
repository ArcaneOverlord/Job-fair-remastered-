import Form from "./form"


export default function Searchbar () {
    return(
        <div  className="w-screen h-full">
            <div className="mx-auto">
               <Form
          type="text"
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl 
          text-white dark:text-black w-[70%] px-[5%] h-10"
          placeholder="Search employers"
        />
            </div>
        
            

        </div>
    )
}