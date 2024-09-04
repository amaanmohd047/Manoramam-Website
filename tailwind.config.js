/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        heading: ["Cinzel", "'Playfair Display'", "serif"],
        body: ["Ralewaey", "Montserrat", "sans-serif"],
        accent: ["Lora", "Merriweather", "serif"],
      },
      colors: {
        primary: {
          50: "#05080d",
          100: "#0f131d",
          200: "#192942",
          300: "#2d4977",
          400: "#375a91",
          500: "#416aab",
          600: "#6e90c8",
          700: "#88a4d2",
          800: "#bdcde6",
          900: "#d7e1f0",
          950: "#f2f5fa",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          50: "#fff9f1",
          100: "#fff1dc",
          200: "#ffe7c4",
          350: "#efc482",
          500: "#eebf79",
          600: "#dda654",
          700: "#c48d3b",
          800: "#9f7434",
          900: "#7c5c2c",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        text: {
          50: "#0a0a0a",
          100: "#1d1d1d",
          200: "#313131",
          300: "#454545",
          400: "#6c6c6c",
          500: "#808080",
          600: "#939393",
          700: "#a7a7a7",
          800: "#cecece",
          900: "#e2e2e2",
          950: "#f5f5f5",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    require("tailwindcss-animate"),
  ],
};
