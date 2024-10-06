/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red':"#c41111" , 
      'white': '#ffffff', // Default white
      'white-50': 'rgba(255, 255, 255, 0.5)', // 50% opacity
      'white-75': 'rgba(255, 255, 255, 0.75)', // 75% opacity
     " text-gray-300": '#efefef',
      'royalBack-950': '#121212',
      'royalBack-900': '#3d3d3d',
      'royalBack-800': '#3d3d3d',
      'royalBack-700': '#4f4f4f',
      'royalBack-600': '#6d6d6d',
      'royalBack-500': '#6d6d6d',
      'royalBack-400': '#888888',
      'royalBack-300': '#b0b0b0',
      'royalBack-200': '#d1d1d1',
      'royalBack-100': '#e7e7e7',
      'royalBack-50': '#f6f6f6',
      'glassWhite': 'rgba(255, 255, 255, 0.2)',
      'cardBg': 'rgba(17, 25, 40, 0.75)', // Custom card background color
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('./src/assets/main-bg.jpg')", // Add your background image here
      },
      backdropBlur: {
        xs: '2px',
        md: '10px',
      },
      saturate: {
        180: '1.8', // For the saturate property
      },
      borderRadius: {
        'lg': '12px', // Customize as per your need
      },
      borderWidth: {
        'glass': '1px',
      },
      borderColor: {
        'glassWhite': 'rgba(255, 255, 255, 0.125)',
      },
    },
  },
  plugins: [],
}
