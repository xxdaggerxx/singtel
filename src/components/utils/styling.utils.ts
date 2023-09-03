import { getDesignTokens } from "../../designTokens";

export const dynamicFontSizingHeader = () => {
  return `
    font-size: ${getDesignTokens().fontSize.lg};
    @media only screen and (max-width: ${getDesignTokens().breakPoint.sm}) {
        font-size: ${getDesignTokens().fontSize.sm};
    }`;
};


export const dynamicFontSizingCell = () => {
  return `
    font-size: ${getDesignTokens().fontSize.md};
    @media only screen and (max-width: ${getDesignTokens().breakPoint.sm}) {
        font-size: ${getDesignTokens().fontSize.sm};
    }`;
};


export const mobileBreakPoint = (css: string, cssMobile: string) => {
  return `
    ${css}
    @media only screen and (max-width: ${getDesignTokens().breakPoint.sm}) {
        ${cssMobile}
    }`;
};
