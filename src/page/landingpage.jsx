import MenuItem from '../components/menuitem';
import Button from '../components/Button';
import LandingPageBody from "../components/landingpagebody";
import Title from '../components/title';

const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto overflow-x-hidden">
      
      <header className=" items-center 
        min-h-[10%] w-full text-white dark:text-black font-inter 
        gap-3 grid md:grid-cols-[auto_1fr_auto] pr-[5%] pl-[5%] mt-3 ml-1.5">

        <div className="justify-self-start items-center">
          <Title />
        </div>

        <nav className="justify-self-center hidden md:block">
          <ul className="flex flex-row gap-14">
            <li><MenuItem name="About" /></li>
            <li><MenuItem name="Employers" /></li>
            <li><MenuItem name="Schedule" /></li>
            <li><MenuItem name="Speakers" /></li>
          </ul>
        </nav>

        <div className="justify-self-end items-center">
          <Button 
            label="Login" 
            className="bg-[#06B6D4] dark:bg-[#0B7B8C] rounded-2xl text-black dark:text-white hidden md:block px-4 py-2"
            handleClick={'/Registrationdemo'} 
          />
        </div>

      </header>
       
      <LandingPageBody />
    </div>
  );
};

export default LandingPage;
