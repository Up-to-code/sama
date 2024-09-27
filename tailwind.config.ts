import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        foreground: "#fff",
        primary: "#348EB2",
        secondary: "#348EB222",
        border: "#348EB250",
      },
    },
  },
  plugins: [],
};
export default config;
