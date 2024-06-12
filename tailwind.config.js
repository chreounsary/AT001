/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/**/*.blade.php',
      './resources/js/**/*.{js,ts,jsx,tsx}',
      './resources/js/pages/**/*.{js,ts,jsx,tsx}',
      './resources/js/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
