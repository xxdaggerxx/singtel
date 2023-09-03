export const designTokens = {
  shadow: {
    low: "0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
  },
  breakPoint: {
    lg: "1025px ",
    md: "768px",
    sm: "480px",
  },
  fontSize: {
    lg: "2.4rem",
    md: "2.0rem",
    sm: "1.4rem",
  },
  color: {
    N10: "#F7F7F7",
    N20: "#E1E1E1",
    N30: "#A8A8A8",
    N70: "#222222",

    P10: "#EFEDFD",
    P40: "#5C50BB",
    P1: "#DEDAFA",

    black: "#000000",
    white: "#FFFFFF",
  }
};

// function to do theme switching
export const getDesignTokens = ()=>designTokens;