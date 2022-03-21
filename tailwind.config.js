module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '450x',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    screens: {
      sm: '480x',
      md: '768px',
      lg: '992px',
      xl: '1170px',
      '2xl': '1536px',
    },
    colors: {
      white: '#FFF',
      black: '#000',
      blue: '#395ce0',
      gray: '#21232d',
      'gray-light': '#626674',
    },
    fontFamily: {
      base: ['Poppins'],
    },
    fontSize: {
      tiny: '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3rem',
      '5xl': '5rem',
      '6xl': '6rem',
    },
    extend: {
      colors: {
        success: '#21D865',
        danger: '#FF0000',
      },
      gap: {
        base: '2.8rem',
      },
    },
  },
  plugins: [],
  rtl: false,
};
