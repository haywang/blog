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
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans]
      },
      colors: {
        primary: {
          50: '#d2ecff',
          100: '#b0d2fd',
          200: '#8fb7fb',
          400: '#6d9cf8',
          500: '#3469e7',
          600: '#1a3fb0',
          800: '#0d2a94',
          900: '#001578'
        },
        gray: colors.gray
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight')
            },
            h3: {
              fontWeight: '600'
            },
            code: {
              color: theme('colors.indigo.500')
            }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
export default config
