/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        laila: ['Laila', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
      },
      colors: {
        primary: "#FF6F3F",
        textMain: "#2B2B2B",
        textBody: "#44433F",
      },
      // Adding keyframes for left-to-right movement
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateY(100%)' },  // Start off-screen to the left
          '100%': { transform: 'translateY(0)' },     // End at the normal position
        },
      },
      animation: {
        slideInRight: 'slideInRight 1.5s ease-out forwards',  // 1s duration, ease-out for smoothness
      },
    },
  },
  plugins: [],
};

