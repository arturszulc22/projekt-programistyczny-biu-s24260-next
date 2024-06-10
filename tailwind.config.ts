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
        "dark-primary-light-blue": "#edede9",
        "dark-primary-gray": "#31363F",
        "primary": "#F8EDEB",
        "secondary": "#FFCBCB",
        "primary-rose": "#FFB1B1",
        "primary-green": "#D8E2DC",
        "primary-gray": "#FEFBFB",
      },
      height: {
        'content': 'calc(100vh - 64px)',
      }
    },
  },
  plugins: [],
};
export default config;
