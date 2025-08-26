import {useTheme} from "./themecontext";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();


 

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-15 h-7 rounded-2xl bg-white dark:bg-black"
    >
      <div className="w-13 h-6 bg-gray-700/10 rounded-2xl justify-self-center">
        <div className={`w-6 h-6 rounded-full opacity-100 bg-moon dark:bg-sun bg-contain bg-no-repeat bg-center
         transform transition-transform duration-300 ease-in-out
         ${dark? "translate-x-7" : "translate-x-0"}`}>
         

        </div>

      </div>
      
    </button>
  );
}
