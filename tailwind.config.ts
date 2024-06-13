import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      clash: ["ClashDisplay-Bold", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "custom-blur": "0 0 rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, transparent, grey, transparent)",
      },
      fontFamily: {
        "ClashDisplay-Regular": "ClashDisplay-Regular",
        "ClashDisplay-Bold": "ClashDisplay-Bold",
        "ClashDisplay-Medium": "ClashDisplay-Medium",
        "ClashDisplay-Semibold": "ClashDisplay-Semibold",
        "ClashDisplay-Light": "ClashDisplay-Light",
        "ClashDisplay-Extralight": "ClashDisplay-Extralight",
      }
    },
  },
  plugins: [],
};
export default config;
