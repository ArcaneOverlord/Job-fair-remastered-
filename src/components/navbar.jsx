import Button from "./Button";
import Title from "./title";

const Navbar = (props) => {
    return(
        <div className="h-20 w-screen flex justify-between items-center pl-[5%] pr-[5%] gap-7 ">
            <Title className="flex justify-self-start"/>
            <Button {...props} className="justify-self-end flex" />
        </div>
    )
};
export default Navbar;