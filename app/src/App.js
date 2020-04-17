import React, { useContext } from "react"
import logo from "./logo.svg"
import "./App.css"
//import "./App.scss"
import styles from "./App.module.scss"
import cx from "classnames"
import styled, { css, ThemeProvider } from "styled-components"
import theme from "./theme"
import themeContext from "./ThemeProvider"
import { useMediaQuery } from "./useMediaQuery"

const styledButtonVariants = {
  primary: css`
    background-color: red;
    &:hover {
      background-color: green;
    }
  `,
  secondary: css`
    background-color: blue;
    &:hover {
      background-color: red;
    }
  `,
  subsc: css`
    background-color: black;
  `,
}

function getStyledButtonStyle(variant) {
  switch (variant) {
    case "primary":
      return css`
        color: ${(props) => props.theme.greenColor || "green"};
        background-color: red;
        &:hover {
          background-color: green;
        }
      `
    case "secondary":
      return css`
        background-color: blue;
        &:hover {
          background-color: red;
        }
      `
    default:
      return css`
        background-color: yellow;
      `
  }
}

const StyledButton = styled.button`
  height: 60px;
  color: var(--green-color);
  ${(props) => styledButtonVariants[props.variant]};
`
const StyledButton2 = styled.button`
  height: 60px;
  ${(props) => getStyledButtonStyle(props.variant)}
`

function App() {
  const theme2 = useContext(themeContext)
  console.log(theme2)
  const primary = true
  const isSubscrisction = true

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <button
          style={{ margin: theme2.margin }}
          className="App-btn bg-color--green-color"
        >
          TEXT
        </button>
        <button
          style={{
            color: theme2.greenColor,
          }}
        >
          TEXT2
        </button>
        <button
          className={cx(
            "App-btn",
            primary ? "App-btn--primary" : "App-btn--secondary",
            isSubscrisction && "App-btn--subsc"
          )}
          // className={`App-btn App-btn${primary ? "--primary" : "--secondary"}${
          //   isSubscrisction ? " App-btn--subsc" : ""
          // }`}
        >
          CSS
        </button>
        <button
          className={cx(
            "App-btn2",
            primary ? "App-btn2--primary" : "App-btn2--secondary",
            isSubscrisction && "App-btn2--subsc"
          )}
        >
          SASS
        </button>
        <button
          className={cx(
            styles.root,
            primary ? styles.primary : styles.secondary,
            isSubscrisction && styles.subsc
          )}
        >
          CSS Modules
        </button>
        <StyledButton variant="primary">Styled Comp</StyledButton>
        <StyledButton2 variant="primary">Styled C default</StyledButton2>
      </div>
    </ThemeProvider>
  )
}

export default App
