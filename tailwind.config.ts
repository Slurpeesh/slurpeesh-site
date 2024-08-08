import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    colors: {
      logo: 'hsl(var(--color-logo) / <alpha-value>)',
      'logo-hover': 'hsl(var(--color-logo-hover) / <alpha-value>)',
      background: 'hsl(var(--color-background) / <alpha-value>)',
      foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
      accent: 'hsl(var(--color-accent) / <alpha-value>)',
      'accent-hover': 'hsl(var(--color-accent-hover) / <alpha-value>)',
      'accent-foreground':
        'hsl(var(--color-accent-foreground) / <alpha-value>)',
      muted: 'hsl(var(--color-muted) / <alpha-value>)',
      'react-router': 'hsl(var(--color-react-router) / <alpha-value>)',
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
