import { useNavigate } from "react-router-dom";



const Title = () =>{
    const navigate=useNavigate();
    return(
       <div onClick={() => navigate("/")} className="flex flex-row cursor-pointer">
<h1 className="text-4xl text-start font-irish text-white dark:text-black ">
    JobFair
    <sub className="text-[#5B6778]  text-2xl font-irish">
    2025
    </sub>
</h1>

    </div>

)};
export default Title;  