import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        },
    }
};