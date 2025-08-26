import { useState } from "react";
import Stepper from "./stepper";
import RegisterForm from "./registerform";
import ProfileForm from "./profileform";

function RegistrationBody(){
const steps=["Account","Profile","Resume","Preferences"];
const[current,setCurrent]=useState(0);

const next=() => 
    setCurrent((c)=> Math.min(c+1,steps.length-1));

const stepContent = [
  {
    title: "Create your account",
    description: "Set up your secure account to get started."
  },
  {
    title: "Complete your profile",
    description: "Tell us more about yourself to personalize your experience."
  },
  {
    title: "Upload your resume",
    description: "Easily upload your resume for quick applications."
  },
  {
    title: "Set your preferences",
    description: "Choose your job and interview preferences."
  }
];


return(
    <div className="flex flex-col bg-[#0B1220] dark:bg-white w-[90%] h-[100%] mx-auto rounded-2xl">
        <h2 className="flex justify-self-start text-left text-white dark:text-black text-xl font-semibold ml-[5%] my-[1%]">Registration</h2>
    

    <div className="w-[75%] mx-auto">
     <Stepper
     steps={steps}
     current={current}
     onStepClick={setCurrent}/> 
     </div>
    
      <div className="flex flex-row h-full w-full">
                <div className="flex-1 flex justify-center items-center flex-col h-[100%] w-[100%] my-auto"> 
                    <h3 className="text-white dark:text-black text-2xl"> 
                        {stepContent[current].title}
                    </h3>
                    <p className="text-white dark:text-black ">
                     {stepContent[current].description}
                    </p>
                </div>
                
     <div className="flex-1 my-auto flex flex-col justify-center ">
        {current === 0&& <div><RegisterForm onclick={`/ProfileForm${next}`}/></div>}
        {current === 1&& <div><ProfileForm/></div>}
        {current === 2&& <div>resume goes here</div>}
        {current === 3&& <div>preference goes here</div>}

     </div>
            </div>

       


</div>
   

    
);
}
export default RegistrationBody;