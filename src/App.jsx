import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./page/landingpage";
import RegistrationPage from "./page/registrationpage";
import ThemeToggle from "./components/theme";


const Router= createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path:'/Registration',
    element:<RegistrationPage/>
  }
]);

function App (){
  return(
    <div className="h-screen w-screen  bg-dark dark:bg-light text-light-text dark:text-dark-text">
      
      <RouterProvider router={Router}/>
   
   
    </div>
  
  )
}
export default App;