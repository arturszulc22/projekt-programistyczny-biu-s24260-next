"use client";

import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkModeToggle: FC = () => {
  const [isDark, setIsDark] = useState("");
  const { setTheme } = useTheme();

  const handleToggleMode = (mode) => {
    setTheme(mode);
    setIsDark(mode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme);
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
      <div
        className={twMerge([
          "border-4 rounded",
          isDark === "light" ? "border-primary-rose" : "border-transparent",
        ])}
        onClick={() => handleToggleMode("light")}
      >
        <div className="w-full h-full bg-primary flex">
          <LightModeIcon className="w-10 h-10 mx-auto fill-primary-rose my-20" />
        </div>
      </div>
      <div
        className={twMerge([
          "border-4 rounded",
          isDark === "dark"
            ? "border-dark-primary dark:border-dark-primary"
            : "border-transparent",
        ])}
        onClick={() => handleToggleMode("dark")}
      >
        <div className="w-full h-full bg-dark-primary dark:bg-dark-primary-blue flex">
          <DarkModeIcon className="w-10 h-10 mx-auto fill-dark-primary-light-blue dark:fill-dark-primary my-20" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
