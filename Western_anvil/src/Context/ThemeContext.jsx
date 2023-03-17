import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  let seletedTheme = localStorage.getItem("selectedTheme");
  
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    e.target.checked ? setDarkMode() : setLightMode();
  };

  seletedTheme == "dark" ? setDarkMode() : setLightMode();

  return (
    <ThemeContext.Provider value={{ toggleTheme, seletedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
