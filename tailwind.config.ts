import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      primary: ['Public Sans', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        primary: "#020618",
        secondary: "#00DC82",
        tertiary: "#FFFFFF",
        black: "#000000",
        // Combinations
        "primary-secondary": "#020618",
        "secondary-primary": "#00DC82",
        "tertiary-primary": "#FFFFFF",
        "tertiary-secondary": "#FFFFFF",
      },
      backgroundImage: {
        "gradient-primary-secondary": "linear-gradient(135deg, #020618 0%, #00DC82 100%)",
        "gradient-secondary-primary": "linear-gradient(135deg, #00DC82 0%, #020618 100%)",
        "gradient-primary-tertiary": "linear-gradient(135deg, #020618 0%, #FFFFFF 100%)",
        "gradient-tertiary-primary": "linear-gradient(135deg, #FFFFFF 0%, #020618 100%)",
        "gradient-secondary-tertiary": "linear-gradient(135deg, #00DC82 0%, #FFFFFF 100%)",
        "gradient-tertiary-secondary": "linear-gradient(135deg, #FFFFFF 0%, #00DC82 100%)",
        "gradient-primary-secondary-tertiary": "linear-gradient(135deg, #020618 0%, #00DC82 50%, #FFFFFF 100%)",
        "gradient-radial-primary": "radial-gradient(circle, #020618 0%, #000000 100%)",
        "gradient-radial-secondary": "radial-gradient(circle, #00DC82 0%, #020618 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;