import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 bg-gray-800 dark:bg-gray-800">
      {theme === 'light' ? (
        <IoIosSunny size={28} className="text-yellow-800" />
      ) : (
        <MdDarkMode size={28} className="text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeToggle;
