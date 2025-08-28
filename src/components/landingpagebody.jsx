import Button from "./Button";
import EmployerTemplate from "./employerTemplate";
import Footer from "./footer"

const LandingPageBody = () => {
  return (
    <div className="grid grid-rows-[1fr_auto_auto] md:h-[100%] gap-3">
      <main className="flex flex-col md:flex-row md:min-h-[50vh]  max-w-[100vw] mx-auto w-full px-4 gap-6">
        <div className="md:min-h-[50vh] md:min-w-[50%]  text-white dark:text-black justify-center flex flex-col pt-15 pb-10 md:py-0 px-2 md:px-4  md:ml-24">
          <h2 className="text-3xl md:text-4xl mt-[-1]">National Hybrid Job Fair</h2>
          <h3 className="text-[#5C5C5C] text-2xl md:text-3xl">Sep 15-16, 2025</h3>
          <p className="text-lg md:text-2xl text-[#CFCFCF] dark:text-black text-wrap mt-5">
            Premium hybrid job fair - top companies, curated workshops,
          </p>
        
          <p className="text-lg md:text-2xl text-[#CFCFCF] dark:text-black text-wrap">
            portfolio reviews, and on-the-spot interviews.
          </p>
          <div className="flex flex-col md:flex-row md:gap-x-11 gap-y-3 mt-7 md:mt-4">
            <Button
              label="Register Now" 
             className="min-w-full"
              handleClick="/Registration"
            />
            <Button
              label="Browse Employers"
              className="bg-[#333333] dark:bg-[#CCCCCC]  !text-[#C4C4C4 min-w-full] dark:!text-black"
            />
          </div>
        </div>
        <div className="min-w-[33%] m-0 md:mr-17 mb-3.5 md:mb-0 md:mt-3">
          <h3 className="text-white dark:text-black text-xl">Featured Employers</h3>
          <div className="flex flex-col gap-y-3">
            <EmployerTemplate companyName="hybrid" compLocation="hyderabad" roles={5} />
            <EmployerTemplate companyName="hybrid" compLocation="hyderabad" roles={5} />
            <EmployerTemplate companyName="hybrid" compLocation="hyderabad" roles={5} />
          </div>
        </div>
      </main>
      <div className="bg-[#0B1220] dark:bg-white min-w-[90vw] max-w-[90vw] min-h-[20vh] justify-self-center
       rounded-2xl flex justify-center p-2.5 pl-4 flex-col text-[#CFCFCF] dark:text-[#323232] leading-7 gap-y-3 md:gap-y-0 ">
        <h3 className="text-2xl">Why attend?</h3>
        <p className="text-wrap break-words max-w-full">
          Curated Employers, on-site interviews, Expert-led workshops, and networking lounges for seniors and entry-level candidates
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPageBody;