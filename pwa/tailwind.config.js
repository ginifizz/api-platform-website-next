/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./con/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      transparent: "transparent",
      blue: {
        DEFAULT: "#2FC1C1",
        black: "#001226",
        light: "#67cece",
        dark: "#299a9b",
        darkest: "#2e5a5c",
      },
      pink: {
        DEFAULT: "#c32186",
        light: "#d52189",
      },
      grey: "#eff4f7",
      white: "#fff",
    },
    dashArray: {
      test: "1",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundImage: (theme) => ({
        "conf-gradient":
          "radial-gradient(ellipse farthest-corner at 52% 160%, rgba(213, 33, 137, 0.8), transparent 50%), radial-gradient(at right 60%, rgba(17, 229, 240, 0.3), transparent 50%), radial-gradient(circle at 75% 50%, rgba(17, 230, 240, 0.2), transparent 50%)",
        "blue-gradient":
          "radial-gradient(circle at 50% 50%,transparent 10%,rgba(0,0,0,.3) 120%)",
        dotted: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'><defs><pattern id='dots' width='6' height='6' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'><circle cx='3' cy='3' r='1' style='stroke:none; fill:%232FC1C1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23dots)'/></svg>")`,
        "btn-blue": "linear-gradient(30deg,#2FC1C1 50%,transparent 0)",
        "btn-white": "linear-gradient(30deg,#fff 50%,transparent 0)",
        "btn-blue-empty": "linear-gradient(30deg,transparent 50%,#2FC1C1 0)",
        "icon-white": "linear-gradient(-120deg,#fff 50%,transparent 0)",
        "icon-blue": "linear-gradient(-120deg,#2FC1C1 50%,transparent 0)",
        circle: `url("/images/con/circle.svg")`,
        "bg-circle": "url('/images/con/circle.svg')",
      }),
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      300: "300%",
    },
  },
  plugins: [require("./plugins/stroke-dasharray-plugin.js")],
};
