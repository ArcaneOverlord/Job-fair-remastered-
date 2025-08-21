import ThemeToggle from "./theme";

const Footer = () =>{
    return(
         <footer className="bg-[#0B1220] dark:bg-white min-w-[100%] min-h-15 mt-6 h-auto flex items-center justify-between pl-6 pr-6">
                <div className=" text-[#4E4E4E] dark:text-[#6F6F6F]flex justify-self-start">
                  c 2025 jobfair.Hello@jobfair.com
                </div>

              <div className="flex justify-self-end ">
                  <ThemeToggle/>  
              </div>

            </footer>
    )
};
export default Footer;