/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#30022a',
                warning: '#ff0013'
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

// 30022a burgundy - red
// 301bc1 blue purple
// pink-500 - warning
