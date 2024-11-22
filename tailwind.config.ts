module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}', // Asegúrate de que apunte a tu carpeta de código
    './src/pages/**/*.{js,jsx,ts,tsx}', // Si tienes una carpeta pages, también debe incluirse
    './src/**/**/*.{js,jsx,ts,tsx}', // Si tienes una carpeta pages, también debe incluirse

    './public/**/*.html', // Si usas HTML estático en public (aunque no es común en Next.js)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
