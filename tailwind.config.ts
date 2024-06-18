import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1920px",
      },
      // fontFamily: {
      //   sora: ["Sora","Playball"],
      //   playBall: ["Playball"],
      // },
      colors: {
        app: {
          primary: "var(--app-primary)",
          primary2: "var(--app-primary2)",
          primary3: "var(--app-primary3)",
          black: "var(--app-black)",
          black2: "var(--app-black2)",
          black3: "var(--app-black3)",
          grey: "var(--app-grey)",
          grey2: "var(--app-grey2)",
          grey3: "var(--app-grey3)",
          lgrey: "var(--app-lgrey)",
          lgrey2: "var(--app-lgrey2)",
          lgrey3: "var(--app-lgrey3)",
          red: "var(--app-red)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
