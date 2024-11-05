import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.mdx',
    './node_modules/pliny/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans]
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray
      }
    }
  },
  plugins: []
}
export default config
