import defaultTheme from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
} satisfies Config;
