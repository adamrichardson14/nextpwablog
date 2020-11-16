const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        120: '30rem',
        140: '35rem',
      },
      fontFamily: {
        sans: ['Inter Var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
