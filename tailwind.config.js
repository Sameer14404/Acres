import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite", // Slower speed for large array
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(-100%)", // Start from the left edge
          },
          "100%": {
            transform: "translateX(100%)", // Move to the right edge
          },
        },
      },
    },
  },
  plugins: [daisyui],
};
