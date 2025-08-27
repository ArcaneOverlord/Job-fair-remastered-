import Button from "./Button";
import Title from "./title";

const Navbar = (props) => {
    return(
        <div className="min-h-[10%] max-w-[100vw] flex justify-between items-center pl-[5%] pr-[5%] gap-7 ">
            <Title className="flex justify-self-start"/>
            <Button {...props} className="justify-self-end flex  w-30" />
        </div>
    )
};
export default Navbar;