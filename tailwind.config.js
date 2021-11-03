module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bg: "#181818",
      card: "#212121",
      primary: "#ffffff",
      reverse: "#000000",
      accent: "#F3FF6B",
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Raleway: ["Raleway"],
      },
    },
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
  plugins: [],
};
