import type { Config } from "tailwindcss";

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
      fontFamily: {
        sora: ["Sora"],
      },
      colors: {
        main:'#052F5F',
        app: {
          background: "hsl(var(--app-background))",
          blue: "hsl(var(--app-blue))",
          darkblue: "hsl(var(--app-darkblue))",
          darkerblue: "hsl(var(--app-darkerblue))",
          lightblue: "hsl(var(--app-lightblue))",
          green: "hsl(var(--app-green))",
          softblue: "hsla(var(--app-softblue))",
          softgray: "hsla(var(--app-softgray))",
          lightgreen: "hsl(var(--app-lightgreen))",
          warning: "hsl(var(--app-warning))",
          red: "hsl(var(--app-red))",
          lightgrey: "hsl(var(--app-lightgrey))",
          lightyellow: "hsl(var(--app-lightyellow))",
          mintgreen: "hsl(var(--app-mintgreen))",
          lightpurple: "hsl(var(--app-lightpurple))",
        },

        // shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
