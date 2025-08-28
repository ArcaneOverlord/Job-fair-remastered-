import { useState } from "react";
import Form from "./form";
import Submit from "./submit";
import FileUpload from "./fileupload";

const ResumeForm = ({ onNext }) => {
  const [form, setForm] = useState({
    resume: null, // store file object, not string
    portfolio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // ✅ Strict URL validator
  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };

  const validate = () => {
    const errs = {};

    // ✅ Resume validation
   if (!form.resume) {
  errs.resume = "Resume is required";
} else if (form.resume.type !== "application/pdf") {
  errs.resume = "Only PDF files are allowed";
}


    // ✅ Portfolio optional validation
    if (form.portfolio.trim()) {
      if (!isValidUrl(form.portfolio.trim())) {
        errs.portfolio = "Invalid URL";
      }
    }

    setErrors(errs);
    console.log("Validation errors:", errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, form data:", form);

    if (validate()) {
      console.log("Validation passed, calling onNext");
      onNext();
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="my-auto gap-y-5 w-full flex flex-col">
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        noValidate
        className="w-full h-full my-auto flex flex-col gap-1"
      >
        <FileUpload
  id="resume"
  label="Upload your Resume (PDF)"
  value={form.resume}
  onChange={(file) => handleChange("resume", file)} // get file object here
  classLabel="text-white dark:text-black"
  className="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black 
   flex flex-col items-center justify-center cursor-pointer w-full md:w-[70%] h-35 px-[5%]"
/>
{errors.resume && <p className="text-red-500">{errors.resume}</p>}


        <Form
          label="Portfolio link"
          id="portfolio"
          type="url"
          value={form.portfolio}
          onChange={(e) => handleChange("portfolio", e.target.value)}
          classlabel="text-white dark:text-black"
          classinput="bg-[#0B1220] dark:bg-[#E7E7E7] border border-[#515151] dark:border-[#D1D1D1] rounded-2xl text-white dark:text-black 
          w-full md:w-[70%] px-[5%] h-10"
          placeholder="Enter your portfolio link (optional)"
        />
        {errors.portfolio && <p className="text-red-500">{errors.portfolio}</p>}

        <Submit value="Confirm" />
      </form>
    </div>
  );
};

export default ResumeForm;
