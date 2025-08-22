import Button from "./Button";

const RegisterBody = ({step}) => {
    return(
        <div className="flex flex-col bg-[#0B1220] dark:bg-white w-[90%] h-[100%] mx-auto rounded-2xl ">
         
            <div className="flex flex-col w-[90%] justify-self-center mx-auto gap-2.5">
                 <p className="flex justify-self-start text-left text-white dark:text-black text-xl font-semibold">Registration</p>
                <div className="flex flex-row justify-between ">
                      
                <Button label="1.Account" className="!text-[#E6E6E6] dark:!text-black min-w-40 h-10 rounded-xl border
                border-[#515151] dark:border-[#C2C2C2] !bg-[#0B1220] dark:!bg-[#E2E2E2]"/>
                  <Button label="2.Profile" className="!text-[#E6E6E6] dark:!text-black min-w-40 h-10 rounded-xl border
                border-[#515151] dark:border-[#C2C2C2] !bg-[#0B1220] dark:!bg-[#E2E2E2]"/>
                    <Button label="3.Resume" className="!text-[#E6E6E6] dark:!text-black min-w-40 h-10 rounded-xl border
                border-[#515151] dark:border-[#C2C2C2] !bg-[#0B1220] dark:!bg-[#E2E2E2]"/>
                      <Button label="4.Preferences" className="!text-[#E6E6E6] dark:!text-black min-w-40 h-10 rounded-xl border
                border-[#515151] dark:border-[#C2C2C2] !bg-[#0B1220] dark:!bg-[#E2E2E2]"/>
                      </div>
            </div>
            <div className="flex flex-row ">
                <div className="flex-1 flex justify-center items-center flex-col h-[100%]"> 
                    <h3> 
                        Step-{step}
                    </h3>
                    <p>
                       Fast,secure Registration, Book interview slots and join workshops. 
                    </p>
                </div>
                <div className="flex-1 items-center flex">
                    <p>form section</p>
                </div>
            </div>


        </div>
    )
};
export default RegisterBody; 