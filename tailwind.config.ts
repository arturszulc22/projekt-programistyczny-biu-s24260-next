import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0D1B2A",
        "dark-secondary": "#1B263B",
        "dark-primary-blue": "#415A77",
        "dark-primary-light-blue": "#778DA9",
        "dark-primary-gray": "#E0E1DD",
        "primary": "#F8EDEB",
        "secondary": "#FCD5CE",
        "primary-rose": "#FDA99A",
        "primary-green": "#D8E2DC",
        "primary-gray": "#FEFBFB",
      },
    },
  },
  plugins: [],
};
export default config;
