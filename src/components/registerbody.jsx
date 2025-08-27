import { useState } from "react";
import Stepper from "./stepper";
import RegisterForm from "./registerform";
import ProfileForm from "./profileform";
import ResumeForm from "./resumeform";
import PreferenceForm from "./preferenceform";

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
    <div className="flex flex-col bg-[#0B1220] dark:bg-white w-[90vw] h-[100%] mx-auto rounded-2xl">
        <h2 className="flex justify-center md:justify-self-start text-left text-white dark:text-black text-xl font-semibold md:ml-[5%] my-[1%]">Registration</h2>
    

    <div className="w-[75%] mx-auto hidden md:flex">
     <Stepper
     steps={steps}
     current={current}
     onStepClick={setCurrent}/> 
     </div>
    
      <div className="flex flex-col md:flex-row h-full w-full">
                <div className="flex-1 flex md:justify-center items-center flex-col w-full max-h-15 md:h-[100%] md:w-[100%] mt-5 "> 
                    <h3 className="text-white dark:text-black text-2xl"> 
                        {stepContent[current].title}
                    </h3>
                    <p className="text-white dark:text-black ">
                     {stepContent[current].description}
                    </p>
                </div>
                
     <div className="flex-1 flex flex-col justify-center items-center h-[100%] w-[100%]">
        {current === 0&& <div><RegisterForm onNext={next}/></div>}
        {current === 1&& <div><ProfileForm onNext={next}/></div>}
        {current === 2&& <div><ResumeForm onNext={next}/></div>}
        {current === 3&& <div><PreferenceForm onNext={next}/></div>}

     </div>
            </div>

       


</div>
   

    
);
}
export default RegistrationBody;