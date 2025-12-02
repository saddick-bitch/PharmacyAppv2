tail wind /** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
primary: "#114b8c", // Azul Farmacia San Rafael
secondary: "#f9d000", // Amarillo Librería Marcela
},
},
},
plugins: [],
}