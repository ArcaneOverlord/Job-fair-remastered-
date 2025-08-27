import Footer from "../components/footer";
import Navbar from "../components/navbar";  
import RegistrationBody from "../components/registerbody";



const RegistrationPage = () => {
    return (
        
        <div className="grid grid-rows-[auto_1fr_auto]  h-full w-full overflow-y-auto overflow-x">
            <header className="my-5">
           <Navbar label="Login"/>
           </header>
             <main className=" justify-center">
               <RegistrationBody/>
            </main>
            <footer className=" justify-self-end">
                <Footer/>

            </footer>
        
        </div>
    
    )
};
export default RegistrationPage;