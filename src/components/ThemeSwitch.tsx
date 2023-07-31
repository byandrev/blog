"use client";

import { useState } from "react";

import useTheme from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <button>
      <label
        htmlFor="toggleTwo"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="block h-6 w-10 rounded-full bg-[#eee]"></div>
          <div
            className={`dot absolute top-1 h-4 w-4 rounded-full ${
              isChecked ? "translate-x-5 bg-sky-700" : "translate-x-1 bg-[#fff]"
            } transition-transform`}
          ></div>
        </div>
      </label>
    </button>
  );
};

export default ThemeSwitch;
