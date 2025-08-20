import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./page/landingpage";
import RegistrationPage from "./page/registrationpage";

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
    <div>
      
      <RouterProvider router={Router}/>
   
      
    </div>
  
  )
}
export default App;