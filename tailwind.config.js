module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      kkred: "#cd5360",
    },
    backgroundColor: {
      kkblue: "#286da8",
      kkred: "#cd5360",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
