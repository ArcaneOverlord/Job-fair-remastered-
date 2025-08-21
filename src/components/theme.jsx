import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-15 h-7 rounded-2xl bg-light dark:bg-dark"
    >
      <div className="w-13 h-6 bg-gray-700/10 rounded-2xl justify-self-center">
        <div className={`w-6 h-6 rounded-full opacity-100 bg-sun dark:bg-moon bg-contain bg-no-repeat bg-center
         transform transition-transform duration-300 ease-in-out
         ${dark? "translate-x-7" : "translate-x-0"}`}>
         

        </div>

      </div>
      
    </button>
  );
}
