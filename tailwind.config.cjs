/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
