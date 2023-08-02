"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const isThemeOnLocalStorage = window.localStorage.getItem("theme");

    if (isThemeOnLocalStorage) {
      setTheme(isThemeOnLocalStorage);
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isSystemThemeDark) {
      setTheme("dark");
      return;
    }

    setTheme("light");
  }, []);

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
