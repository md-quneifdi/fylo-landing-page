/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        curvyDesk: "url('/assets/images/bg-curvy-desktop.svg')",
      },
      colors: {
        emailSignUp: "hsl(217, 28%, 15%)",
        mainBackground: "hsl(218, 28%, 13%)",
        fBackground: "hsl(216, 53%, 9%)",
        testBackground: "hsl(219, 30%, 18%)",
        cyanGradient: "hsl(176, 68%, 64%)",
        blueGradient: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
