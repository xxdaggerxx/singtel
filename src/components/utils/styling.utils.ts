import { getDesignTokens } from "../../designTokens";

export const dynamicFontSizing = () => {
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
