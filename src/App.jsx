import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./page/landingpage";
import RegistrationPage from "./page/registrationpage";
import LoginForm from "./components/loginform";
import EmployerLoginForm from "./components/employerlogin";
import EmployerList from "./page/browseemployerspage";




const Router= createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path:'/Registration',
    element:<RegistrationPage/>,

  },
  {
    path:"/Login",
    element:<LoginForm/>
  },
  {
    path:"/Employer login",
    element:<EmployerLoginForm/>
  },
  {
    path:"/Browse employers",
    element:<EmployerList/>
  }
 
]);

function App (){
  return(
    <div className=" h-screen w-screen
  bg-[#071027] dark:bg-[#EAEEEE]  
  bg-no-repeat bg-center bg-cover 
  [background-image:url('/images/dark.png')]
  dark:[background-image:url('/images/light.png')]">
      
      <RouterProvider router={Router}/>
   
 
    </div>
  
  )
}
export default App;