import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instragram-from": "hsl(37, 97%, 70%)",
        "instragram-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",

        "dark-toggle-from": "hsl(210, 78%, 56%)",
        "dark-toggle-to": "hsl(146, 68%, 55%)",

        "light-toggle": "hsl(230, 22%, 74%)",

        "dark-very-dark-blue-1": "hsl(230, 17%, 14%)",
        "dark-very-dark-blue-2": "hsl(232, 19%, 15%)",
        "dark-dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "dark-desaturated-blue": "hsl(228, 34%, 66%)",
        "light-very-pale-blue": "hsl(225, 100%, 98%)",
        "light-light-grayish-blue": "hsl(227, 47%, 96%)",
        "light-dark-grayish-blue": "hsl(228, 12%, 44%)",
        "light-very-dark-blue": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
export default config;
