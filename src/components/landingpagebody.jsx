import Button from "./Button";
import EmployerTemplate from "./employerTemplate";
import Footer from "./footer";



const LandingPageBody =() => {
   
    return(
        <div className="grid grid-rows-[1fr_auto_auto] gap-6">
            <main className="flex flex-col md:flex-row md:min-h-[50vh] max-w-screen-xl mx-auto w-full px-4 gap-6">

                <div className="min-h-[100vh] md:min-w-[50%] text-white dark:text-black justify-center flex flex-col 
                                px-4 md:ml-25">
                    <h2 className="text-3xl md:text-4xl mt-[-1]">National Hybrid Job Fair </h2>
                 
                    <h3 className="text-[#5C5C5C] text-2xl md:text-3xl">Sep 15-16,2025</h3>
                    <p className="text-lg md:text-2xl text-[#CFCFCF] dark:text-black 
                    break-words whitespace-normal mt-5">Premium hybrid job fair- top companies,
                        curated workshops,</p>
                       
                        <p className="text-2xl text-[#CFCFCF] dark:text-black">
                         portfolio reviews,and on- the -spot
                        interviews.
                    </p>
                    <div className="flex flex-col md:flex-row 
                    md:gap-x-11 gap-y-3
                    mt-4">
                    <Button label="Register Now" 
                    className={`bg-[#06B6D4] dark:bg-[#0B7B8C] min-w-35 min-h-10 rounded-2xl text-black dark:text-white`} 
                    handleClick={'/Registration'}/>
                    <Button label="Browse Employers" className={`bg-[#333333] dark:bg-[#CCCCCC] min-w-40 min-h-10 rounded-2xl 
                     !text-[#C4C4C4]  dark:!text-black`}/>
                    </div>
                </div> 
                <div className=" min-w-[33%] mr-17">
                    <h3 className="text-white dark:text-black text-1xl">Featured Employers</h3> 
                    <div className="flex flex-col gap-y-3"> 
                    <EmployerTemplate companyName={"hybrid"} compLocation={"hydrbad"} roles={5}/>
                    <EmployerTemplate companyName={"hybrid"} compLocation={"hydrbad"} roles={5}/>
                    <EmployerTemplate companyName={"hybrid"} compLocation={"hydrbad"} roles={5}/>
                    </div>
                </div>

            </main>
            <div className="bg-[#0B1220] dark:bg-white min-w-[90vw] max-w-[90%] min-h-[20vh] justify-self-center rounded-2xl flex justify-center
            p-2.5 pl-4 flex-col text-[#CFCFCF] dark:text-[#323232]  leading-7">
                <h3 className="text-2xl">Why attend?</h3>
                <p>Curated Employers , on-site interviews,Experts led workshops,and networking lounges for seniors and entry-
                     level candidates</p>
            </div>
           <Footer/>

        </div>
    ) 
};      
export default LandingPageBody;