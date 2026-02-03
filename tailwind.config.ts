import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dhko: {
          primary: 'var(--color-primary)',
          'primary-light': 'var(--color-primary-light)',
          'primary-dark': 'var(--color-primary-dark)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          surface: 'var(--color-surface)',
          'surface-elevated': 'var(--color-surface-elevated)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'header': '0 4px 20px rgba(15, 76, 92, 0.15)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
