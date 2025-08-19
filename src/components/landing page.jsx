
import MenuItem from './menubar';
import Button from './Button'

const LandingPage =() => {
  return(
    <div className="h-screen w-screen bg-[url('./src/assets/images/Vector.png')] flex p-0 pl-7 pr-10">
     <header className='items-center  h-[15%] w-screen text-white font-inter 
      gap-3 grid grid-cols-[auto_1fr_auto]'>
      <h1 className='justify-self-start
       items-center text-4xl text-start  '>
        JobFair
      </h1>
      <nav className='justify-self-center'>
        <ul className='flex flex-rows gap-14'>
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
 <Button label="Register" className={`bg-[#06B6D4] min-w-35 min-h-10 rounded-3xl text-black`} />
  

      </div>
     
    
     </header>
    </div>
  )
}
export default LandingPage; 