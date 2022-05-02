module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'], theme: {
        extend: {},
    }, plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
    important: true
}
