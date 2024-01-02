import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
    aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white mr-1.5 absolute lg:static right-17"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="Icone no formato de uma lua"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="Icone no formato de um sol"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
