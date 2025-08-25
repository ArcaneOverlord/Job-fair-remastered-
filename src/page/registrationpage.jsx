import Footer from "../components/footer";
import Navbar from "../components/navbar";  
import RegisterBody from "../components/registerbody";


const RegistrationPage = () => {
    return (
        
        <div className="grid grid-rows-[auto_1fr_auto]  h-screen w-screen">
            <header>
           <Navbar label="Login"/>
           </header>
             <main className=" justify-center">
               <RegisterBody/>
            </main>
            <footer className=" justify-self-end">
                <Footer/>

            </footer>
        
        </div>
    
    )
};
export default RegistrationPage;