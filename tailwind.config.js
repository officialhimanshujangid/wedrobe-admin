/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Customize the speed (e.g., 3 seconds for a full rotation)
      },
      fontFamily: {
        // sans: ["Play", 'sans-serif'],
        
        sans: ['"Lexend"', 'sans-serif'],
      },
      colors: {
        /*
        * body, modal, drawer background & ring-offset-color
        */
        background: colors.white,

        /*
        * body text color
        */
        foreground: colors.gray[600],

        /*
        * border, default flat bg color for input components, tab & dropdown hover color
        */
        muted: colors.gray[200],

        /*
        * primary colors
        */
        primary: {
          lighter: colors.gray[200],
          DEFAULT: colors.gray[800],
          dark: colors.gray[950],
          foreground: colors.white,
        },

        /*
        * secondary colors
        */
        secondary: {
          lighter: colors.indigo[200],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[700],
          foreground: colors.white,
        },

        /*
        * danger colors
        */
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },

        /*
        * warning colors
        */
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
        * info colors
        */
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
        * success colors
        */
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },
        sidebarTheme:{
          dark:'#D73061',
          light: '#fcd5e1'
        },
        charcol:{
          light: '#2B2B2B'
        }
      },
    

    },
  },
  plugins: []
}
