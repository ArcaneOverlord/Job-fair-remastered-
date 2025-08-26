import { useState } from "react";
import Stepper from "./stepper";
import RegisterForm from "./registerform";

function RegistrationProgress(){
const steps=["Account","Profile","Resume","Preferences"];
const[current,setCurrent]=useState(0);

const next=() => 
    setCurrent((c)=> Math.min(c+1,steps.length-1));
const prev =() => setCurrent((c)=> Math.max(c-1,0));


return(
    <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h2 className="text-xl font-semibold ">Registration progress</h2>
    
     <Stepper
     steps={steps}
     current={current}
     onStepClick={setCurrent}/> 

     <div className="rounded-xl border p-6 bg-white dark:bg-gray-900">
        {current === 0&& <div><RegisterForm/></div>}
        {current === 1&& <div> profile goes here</div>}
        {current === 2&& <div>resume goes here</div>}
        {current === 3&& <div>preference goes here</div>}

     </div>
        <div className="flex justify-between">
            <button onClick={prev}
            disabled={current===0}
            className="px-4 py-2 rounded-lg border disabled:opacity-40">
                Back

            </button>

            <button onClick={next}
            diabled={current===steps.length-1}
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white disabled:0pacity-40">Next</button>
        </div>

    </div>

   

    
);
}
export default RegistrationProgress;