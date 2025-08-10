/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom extra-small breakpoint
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            maxWidth: '65ch',
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
                textDecoration: 'underline',
              },
              code: { color: theme('colors.blue.600') },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '700',
              lineHeight: '1.2',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: theme('colors.gray.900'),
              '&:first-child': {
                marginTop: 0,
              },
            },
            h1: { fontSize: '2.25em' },
            h2: { fontSize: '1.75em' },
            h3: { fontSize: '1.5em' },
            h4: { fontSize: '1.25em' },
            'p, ul, ol, blockquote, pre, table': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ul, ol': {
              paddingLeft: '1.5em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.5em',
              '&::before': {
                content: '""',
                position: 'absolute',
                backgroundColor: theme('colors.gray.400'),
                borderRadius: '50%',
                width: '0.375em',
                height: '0.375em',
                top: '0.6875em',
                left: '0.25em',
              },
            },
            'ol > li': {
              paddingLeft: '0.5em',
            },
            'ol > li::marker': {
              color: theme('colors.gray.500'),
              fontWeight: '500',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.gray.700'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.gray.200'),
              quotes: '"\u201C" "\u201D" "\u2018" "\u2019"',
              paddingLeft: '1rem',
              marginLeft: '0',
              marginRight: '0',
            },
            'blockquote p:first-of-type::before': {
              content: '"\\201C"',
              color: theme('colors.gray.400'),
              fontSize: '2em',
              lineHeight: '0.1em',
              marginRight: '0.25em',
              verticalAlign: '-0.4em',
            },
            'blockquote p:last-of-type::after': {
              content: '"\\201D"',
              color: theme('colors.gray.400'),
              fontSize: '2em',
              lineHeight: '0.1em',
              marginLeft: '0.1em',
              verticalAlign: '-0.5em',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              fontSize: '0.9em',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: theme('colors.gray.50'),
              borderRadius: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
              margin: '1.5em 0',
              fontSize: '0.9em',
              lineHeight: '1.5',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: 0,
              borderRadius: 0,
              fontSize: '1em',
            },
            hr: {
              borderColor: theme('colors.gray.200'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '1.5em 0',
              fontSize: '0.95em',
            },
            'th, td': {
              border: `1px solid ${theme('colors.gray.200')}`,
              padding: '0.5em 1em',
              textAlign: 'left',
            },
            th: {
              backgroundColor: theme('colors.gray.50'),
              fontWeight: '600',
            },
            'tr:nth-child(even)': {
              backgroundColor: theme('colors.gray.50'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700'),
            },
            'blockquote p:first-of-type::before, blockquote p:last-of-type::after': {
              color: theme('colors.gray.600'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            'th, td': {
              borderColor: theme('colors.gray.700'),
            },
            th: {
              backgroundColor: theme('colors.gray.800'),
            },
            'tr:nth-child(even)': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
