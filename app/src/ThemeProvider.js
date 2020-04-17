import React from "react"
import theme from "./theme"
import { useMediaQuery } from "./useMediaQuery"

function getThemeValues(size) {
  return {
    ...theme["default"],
    ...theme[size],
  }
}

const ThemeContext = React.createContext()
export const ThemeContextProvider = ({ children }) => {
  const { screenSize } = useMediaQuery()

  return (
    <ThemeContext.Provider value={getThemeValues(screenSize)}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContext
