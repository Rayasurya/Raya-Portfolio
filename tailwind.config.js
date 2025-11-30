/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                'container': '1280px',
            },
            animation: {
                'marquee': 'marquee 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - 1rem))' }
                }
            }
        },
    },
    plugins: [],
}
