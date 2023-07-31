"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (typeof window !== "undefined") localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const operatingSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (theme === "dark" && operatingSystemThemeDark.matches)
      root.classList.add("dark");
    if (theme === "dark") root.classList.add("dark");
    if (theme === "light") root.classList.remove("dark");
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
