export default {
  default: {
    greenColor: "rgb(18, 199, 18)",
    margin: "15px",
  },
  lg: {
    margin: "15px",
    width: "calc(100% / 3)",
  },
  md: {
    margin: "10px",
    width: "calc(100% / 2)",
  },
  sm: {
    margin: "5px",
    width: "100%",
  },
}

export const breakpoints = {
  lg: "(min-width: 1280px)",
  md: "(min-width: 768px) and (max-width: 1280px)",
  sm: "(max-width: 768px)",
}
