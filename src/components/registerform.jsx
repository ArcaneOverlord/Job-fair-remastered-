import { useState } from "react";
import Form from "./form";
import Submit from "./submit";
import Password from "./password";

const RegisterForm = ({ onNext }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    reenterPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password required";
    if (form.password !== form.reenterPassword)
      errs.reenterPassword = "Passwords do not match";
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
    <div className="my-auto gap-4 w-full flex flex-col">
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        className="w-[70vw] h-[100%] my-auto flex flex-col gap-1"
      >
        <Form
          label="Full Name"
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-full md:w-[70%] px-[5%] h-10"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <Form
          label="Email"
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black  w-full md:w-[70%] px-[5%] h-10"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Password
          label="Password"
          id="password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black  w-[85%] md:w-[40%] px-[5%] h-10"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <Password
          label="Re-enter Password"
          id="reenterpassword"
          value={form.reenterPassword}
          onChange={(e) => handleChange("reenterPassword", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black  w-[85%] md:w-[40%] px-[5%] h-10"
          placeholder="Re-Enter Password"
        />
        {errors.reenterPassword && <p className="text-red-500">{errors.reenterPassword}</p>}
      <div className="flex justify-center">
        <Submit value="Confirm" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
