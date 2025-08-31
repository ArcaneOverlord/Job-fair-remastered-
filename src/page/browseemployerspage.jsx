import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Employerbody from "../components/employerlistbody"


const EmployerList=() =>{
    return(
        <div className="h-screen w-screen grid grid-rows-[auto_1fr_auto]">
            <div className="mt-4">
                    <Navbar Btn="!hidden"/>
            </div>
            <div>
                <Employerbody/>

            </div>
            <div>
                <Footer/>
            </div>
        
        </div>
    )

};
export default EmployerList;