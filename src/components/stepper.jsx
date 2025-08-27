//tiny helper to join class names
const cx =(...classes) => classes.filter(Boolean).join("");

function Stepper ({steps,current=0, onStepClick}) {
    const totalGaps = Math.max(steps.length-1,1);
    const percent=(current/totalGaps)*100;

    return(
        <div className="relative w-[90%] mx-auto">
            {/*rope under every thing*/}

           <div  className="absolute left-0 right-0 top-1/2 translate--y-1/2 h-0.5 
            bg-[#515151] dark:bg-[#C2C2C2]"
            aria-holder="true"/>

            {/*color filled rope  */}

            <div className="absolute left-0 top-1/2 translate-y-1/2 h-0.5 bg-white dark:bg-black translate-all duration-300 "
            style={{width:`${percent}%`}} aria-hidden="true"/>

            {/* the boxes*/}

            <ol className="relative z-10 flex items-center justify-evenly">
                {steps.map((label,i) => {
                    const status=
                    i<current? "complete" : i===current? "active" : "upcoming";

                    return(
                        <li key={label} className="flex-1 flex justify-center">
                            <button type="button" 
                            onClick={() => onStepClick?.(i)}
                            aria-current={status=== "active"? "step" : undefined}
                            aria-label={`step ${i+1}:${label}`}
                            className={cx(
                                "px-4 rounded-lg border border-[#515151] text-base bg-[#0B1220] transition-color w-30 ",
                              
                                status==="complete"&&

                                "bg-[#0B1220] text-white border-white dark:bg-[#E2E2E2] dark:text-black dark:border-black",
                                status==="active"&&

                                "bg-[#0B1220] text-white border-white dark:bg-[#E2E2E2] dark:text-black dark:border-black",
                               status==="upcoming"&&

                               "bg-[#0B1220] text-[#515151] border-[#515151] dark:bg-[#E2E2E2] dark:text-black dark:border-[#C2C2C2]"

                            )}>
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ol>

        </div>
    );

}
export default Stepper;
 