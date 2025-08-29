import { useState } from "react";
import MenuItem from "./menuitem";


function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className={`relative flex justify-self-end  z-20 flex-col
    ${isOpen? "gap-2" : "gap-1"}`} onClick={() => setIsOpen(!isOpen)}>

        <div
          className={`block h-1 w-8 bg-white dark:bg-black rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></div>
        <div
          className={`block h-1 w-5 bg-white dark:bg-black rounded transition-all duration-500 ease-in-out ml-3 ${
            isOpen ? "opacity-0 -translate-x-55 bg-black " : "opacity-100"
          }`}
        ></div>
        <div
          className={`block h-1 w-8 bg-white dark:bg-black rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        >
      </div>
 </div>

<div
  className={`${
    isOpen ? "fixed top-0 left-0 w-screen h-screen flex transition-all duration-500" : "hidden"
  }  bg-[#071027] dark:bg-[#EAEEEE]  
  bg-no-repeat bg-center bg-cover 
  [background-image:url('/images/dark.png')]
  dark:[background-image:url('/images/light.png')] z-10 justify-center items-center`}
>
  <ul className="flex flex-col justify-center items-center gap-14 text-white dark:text-black font-semibold">
    <li><MenuItem name="About" /></li>
    <li><MenuItem name="Employers" /></li>
    <li><MenuItem name="Schedule" /></li>
    <li><MenuItem name="Speakers" /></li>
  </ul>
</div>





</div>
  )
}
export default Hamburger;
