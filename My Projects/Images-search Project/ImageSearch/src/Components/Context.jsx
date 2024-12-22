import React, { createContext, useContext, useEffect, useState } from "react";

//1. create Context
const AppContext = createContext();

//3. creating the initial data for dark mode switch
const getInitialData = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  const storedDarkMode = localStorage.getItem("darkTheme");
  if (storedDarkMode === null) {
    return preferDarkMode;
  }

  return storedDarkMode === "true";
};

//2.create context provider
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialData());
  const [searchItem, setSearchItem] = useState("car");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchItem, setSearchItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

//creating a custom hook to simplify accessing the context
//useGlobalContext: Custom hook to access the context value.
export const useGlobalContext = () => useContext(AppContext);
