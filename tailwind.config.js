/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff0db",
          secondary: "#eed9c4",
          accent: "#1F1717",
          neutral: "#2a323c",
          "base-100": "#1d232a",
          "base-content": "#393646",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    base: false,
    styled: true,
    prefix: "daisy-",
  },
  plugins: [require("daisyui")],
};
