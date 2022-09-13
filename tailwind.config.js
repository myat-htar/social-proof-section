/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['"League Spartan"', "sans-serif"],
      },
      backgroundImage: {
        "mobile-pattern":
          "url('/images/bg-pattern-top-mobile.svg'), url('/images/bg-pattern-bottom-mobile.svg')",
        "desktop-pattern":
          "url('/images/bg-pattern-top-desktop.svg'), url('/images/bg-pattern-bottom-desktop.svg')",
      },

      colors: {
        "dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
        "attribution": "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
