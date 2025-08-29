import { useState } from "react";
import Form from "./form";
import Submit from "./submit";
import Password from "./password";
import Navbar from "./navbar";
import Footer from "./footer";

const LoginForm = ({ onNext }) => {
  const [form, setForm] = useState({

    email: "",
    password: "",
  
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const errs = {};
    
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password required";
    setErrors(errs);
    console.log("Validation errors:", errs); // Debug validation
    return Object.keys(errs).length === 0;
  };


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, form data:", form); // Debug form data
    console.log("onNext function:", onNext); // Debug onNext prop
    if (validate()) {
      console.log("Validation passed, calling onNext");
      onNext();
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="h-screen w-screen grid grid-rows-[auto_1fr_auto] gap-y-6">
      <div className="mt-4">
        <Navbar Btn="!hidden"/>
        </div>
        <div className="h-full w-[80%] bg-[#0B1220] dark:bg-white mx-auto gap-y-7 rounded-2xl
           flex justify-center items-center flex-col p-3">
            <h3 className="font-bold text-white dark:text-black text-3xl">Login</h3>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        className="w-full md:w-[70%] xl:w-[50%]"
      >
        
       
        <Form
          label="Email"
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl 
          text-white dark:text-black   w-[100%] px-[5%] h-10 mx-auto mb-3"
          placeholder="Enter your email"
        /> 
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Password
          label="Password"
          id="password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl 
          text-white dark:text-black  w-[85%] md:w-[88%] px-[5%] h-10 mx-auto"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

      <div className="flex justify-center">
        <Submit value="Confirm" />
        </div>
      </form>
     
      
      </div>
       <div>
               <Footer/>
        </div>
 
    </div>
  );
};

export default LoginForm;
