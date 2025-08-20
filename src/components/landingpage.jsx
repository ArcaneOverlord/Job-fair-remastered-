
import MenuItem from './menuitem';
import Button from './Button'
import LandingPageBody from "./landingpagebody";
import Title from './title';

const LandingPage =() => {
  return(
    <div className="h-screen w-screen bg-[url('/images/Vector.png')] flex
    flex-col">
      
     <header className='items-center  h-[15%] w-screen text-white font-inter 
      gap-3 grid grid-cols-[auto_1fr_auto] pr-[5%] pl-[5%]'>
      <div className='justify-self-start
       items-center'>
        <Title/>
      </div>
      <nav className='justify-self-center'>
        <ul className='flex flex-row  gap-14'>
          <li>
            <MenuItem name="About"/>
          </li>
          <li>
            <MenuItem name="Employers"/>
          </li>
          <li> 
            <MenuItem name="Schedule"/>
          </li>
          <li>
            <MenuItem name="Speakers"/>
          </li>
 
        </ul>
      </nav>
      <div className='justify-self-end items-center'>
 <Button label="Register" className={`bg-[#06B6D4] min-w-35 min-h-10 rounded-2xl text-black`} />
  

      </div>
     
    
     </header>
  <LandingPageBody/>
    </div>

    
   

  )
};
export default LandingPage; 