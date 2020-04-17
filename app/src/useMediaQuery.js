import { useEffect, useState } from "react"
import { breakpoints } from "./theme"

function getScreenSize() {
  for (const size in breakpoints) {
    if (breakpoints.hasOwnProperty(size)) {
      console.log(breakpoints[size], window.matchMedia(breakpoints[size]))
      if (window.matchMedia(breakpoints[size]).matches) {
        console.log("true")
        return size
      }
    }
  }
  return "default"
}

function reportWindowWidth() {
  return { width: window.innerWidth, screenSize: getScreenSize() }
}

export function useMediaQuery() {
  const [state, setState] = useState()
  const handleSize = () => setState(reportWindowWidth())
  useEffect(() => {
    if (!state) {
      handleSize()
    }
    window.addEventListener("resize", handleSize)
    return () => {
      window.removeEventListener("resize", handleSize)
    }
  }, [])
  return state || {}
}
