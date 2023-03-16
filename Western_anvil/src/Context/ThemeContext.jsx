import { createContext } from 'react'
const ThemeContext=createContext()
export const ThemeContextProvider = ({children}) => {
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark")
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightMode=()=>{
        document.querySelector("body").setAttribute("data-theme","light")
        localStorage.setItem("selectedTheme","light")
    }
    let selectedTheme=localStorage.getItem("selectedTheme")

    const toggleTheme=(e)=>{
      
      e.target.checked ? 
      setDarkMode()
      :
      setLightMode()
    }
    {selectedTheme =="dark" && setDarkMode()}

  return (
    <ThemeContext.Provider value={{toggleTheme,selectedTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext