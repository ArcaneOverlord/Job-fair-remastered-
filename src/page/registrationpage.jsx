import Footer from "../components/footer";
import Navbar from "../components/navbar";  
import RegisterBody from "../components/registerbody";


const RegistrationPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
        <div className="grid grid-rows-[auto_1fr_auto] h-[100%]">
            <header>
           <Navbar label="Login"/>
           </header>
             <main className="flex justify-center">
               <RegisterBody/>
            </main>
            <footer className="flex justify-self-end">
                <Footer/>

            </footer>
        
        </div>
        </div>
  
    )
};
export default RegistrationPage;