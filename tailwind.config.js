
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'serif'],
      },
      dropShadow: {
        custom: "0 4px 4px rgba(0, 0, 0, 0.25)", // Votre ombre personnalisée
      },
       fontSize: {
        custom32: '32px', // Nom de la classe pour 32px
        custom10: '10px',
        size15: '15px',
      },
      letterSpacing: {
        tighterCustom: '-0.1px', // Nom de la classe pour -0.1px
        wideest: '0.5em', // Nom de la classe pour
        widestCustom: '0.25px',
        spacingCustom: '0.385em',
      },
      flexGrow: {
        .85: '.85'
      },
      inset: {
        '-13' : '-3.25rem',
        '-21': '-5.25rem', // Valeur personnalisée équivalente à -17
        '14px': '14px', // Value for top
        '17': '17rem', // Value for left
      },
      screens: {
        'xxxs': '320px',    // Petit mobile
        'xxs': '375px',    // Mobile moyen
        'xs': '425px',    // Grand mobile
      },
      gap: {
        '1.15': '1.15rem',
      },
    },
  },
  plugins: [],
};

