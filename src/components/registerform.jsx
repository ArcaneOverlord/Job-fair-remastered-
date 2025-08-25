import Form from './form';
import Submit from './submit';
import Password from './password';

const RegisterForm =() => {
    return(
        <div className='my-auto w-[100%] h-[100%] flex flex-col'>
          <form action="" autoComplete="off" method="post" className=' w-[100%] h-[100%] my-auto flex flex-col gap-1'>
            <Form label="Full Name" id="name" type="text" classlabel={`text-white dark:text-black `}
            classinput={`bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-[70%]
              px-[5%] h-10`} 
            placeholder="Enter your full name"
             />

              <Form label="Email" id="email" type="email" classlabel={`text-white dark:text-black `}
            classinput={`bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-[70%] 
              px-[5%] h-10`} 
            placeholder="Enter your email"
             />

             <Password label="Password" id="password" type="password" classlabel={`text-white dark:text-black `}
            classinput={`bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-[40%] 
              px-[5%] h-10`} 
            placeholder="password"
             />
          

               <Password label="RE-Enter password" id="reenterpassword" type="password" classlabel={`text-white dark:text-black `}
            classinput={`bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-[40%] 
              px-[5%] h-10`} 
            placeholder="Re-Enter password"
             />
          
             
          <Submit value="Confirm"/>
      

             </form>

        </div>
    )
};
export default RegisterForm;         