import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const darkMode = "class";
export const theme = {
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.5rem" }],
    base: ["1rem", { lineHeight: "1.75rem" }],
    lg: ["1.125rem", { lineHeight: "2rem" }],
    xl: ["1.25rem", { lineHeight: "2rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["2rem", { lineHeight: "2.5rem" }],
    "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
    "5xl": ["3rem", { lineHeight: "3.5rem" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1.1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  extend: {
    borderRadius: {
      "4xl": "2rem",
    },
    fontFamily: {
      sans: ["Inter", ..._fontFamily.sans],
      display: ["Lexend", ..._fontFamily.sans],
    },
    maxWidth: {
      "2xl": "40rem",
    },
  },
};
export const plugins = [require("@tailwindcss/forms")];
