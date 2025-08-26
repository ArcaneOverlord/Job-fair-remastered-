import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./page/landingpage";
import RegistrationPage from "./page/registrationpage";
import ProfileForm from "./components/profileform";




const Router= createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path:'/Registration',
    element:<RegistrationPage/>,

  },
 
]);

function App (){
  return(
    <div className="h-screen w-screen bg-[#071027] dark:bg-[#EAEEEE] bg-[url('/images/bg-light.png')] dark:bg-[url('/images/bg-dark.png')] bg-no-repeat bg-center bg-cover">
      
      <RouterProvider router={Router}/>
   
 
    </div>
  
  )
}
export default App;