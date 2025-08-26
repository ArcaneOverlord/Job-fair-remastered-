import { useState } from "react";
import Form from "./form";
import Submit from "./submit";
import Textarea from "./textarea";

const ResumeForm = ({ onNext }) => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    about: "",
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "title is required";
    if (!form.location.trim()) errs.location = "location is required";
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
        className="w-[100%] h-[100%] my-auto flex flex-col gap-1"
      >
        <Form
          label="Current Title"
          id="title"
          type="text"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black w-[70%] px-[5%] h-10"
          placeholder="Enter your current title if any"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        <Form
          label="Location"
          id="location"
          type="text"
          value={form.location}
          onChange={(e) => handleChange("location", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white 
          dark:text-black w-[70%] px-[5%] h-10"
          placeholder="enter your location"
        />
        {errors.location && <p className="text-red-500">{errors.location}</p>}


         <Textarea
          label="About/Bio"
          id="about"
          type="text"
          value={form.about}
          onChange={(e) => handleChange("about", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl 
          text-white dark:text-black w-[70%] h-[7rem] px-[5%] py-[1%] h-10 scrollbar-none"
          placeholder="About/bio"
        />
        {errors.about && <p className="text-red-500">{errors.about}</p>}



        <Submit value="Confirm" />
      </form>
    </div>
  );
};

export default ResumeForm;
