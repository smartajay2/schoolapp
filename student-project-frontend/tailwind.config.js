/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '50': '12.5rem',  // Custom value: 12.5rem
        '80': '20rem',    // Custom value: 20rem
        '128': '32rem',   // Custom value: 32rem
        '160': '40rem',   // Custom value: 40rem
        '200': '50rem',   // Custom value: 50rem
      },
    },
  },
  plugins: [],
}

