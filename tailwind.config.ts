import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          zinc: "#121212", 
          orange: "#FF5F00", // The Moha Orange
          chrome: "#E5E5E5",
          steel: "#71717a",
        },
      },
      letterSpacing: {
        'ultra-wide': '.4em',
        'tighter': '-.05em',
      },
    },
  },
  plugins: [],
};
export default config;