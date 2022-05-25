const { colors: defaultColors } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...defaultColors },
    },
  },
  plugins: [],
};
