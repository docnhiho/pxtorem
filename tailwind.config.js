/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],

  theme: {
    extend: {},
  },

  // plugins: [
  //   function ({ addUtilities, theme, variants }) {
  //     const baseFontSize = theme('fontSize.base', '1rem'); // Có thể thay đổi giá trị mặc định tại đây
  //     const utilities = {};

  //     for (let i = 0; i <= 100; i++) {
  //       const valueInRem = `${i / 20}rem`; // Chuyển đổi từ px sang rem
  //       utilities[`.text-${i}`] = { fontSize: `${i}px` };
  //       utilities[`.text-${i}px-rem`] = { fontSize: valueInRem };
  //     }

  //     addUtilities(utilities, variants('fontSize'));
  //   },
  // ],

  // plugins: [
  //   function ({ addUtilities, variants }) {
  //     const utilities = {};

  //     // Hàm chuyển đổi giá trị từ px sang rem
  //     const pxToRem = (value) => `${parseFloat(value) / 16}rem`;

  //     // Tự động tạo utility classes cho margin, padding và font size
  //     ['margin', 'padding', 'fontSize'].forEach((property) => {
  //       for (let i = 0; i <= 100; i++) {
  //         const className = `.${property}-${i}`;
  //         const valueInPx = `${i * 4}px`; // Giá trị mặc định trong px
  //         const valueInRem = pxToRem(valueInPx); // Chuyển đổi giá trị sang rem
  //         utilities[`${className}-rem`] = { [property]: valueInRem };
  //       }
  //     });

  //     addUtilities(utilities, variants(['responsive', 'hover']));
  //   },
  // ],
  plugins:  [
    require('tailwindcss-convert-px-to-rem')
    
    
  ]


}

