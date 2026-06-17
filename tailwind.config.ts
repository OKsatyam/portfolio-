import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0c0a07',
          card: '#100e0b',
          codeblock: '#0f0c08',
        },
        border: {
          DEFAULT: '#1e1b18',
          hover: '#2c2825',
          dark: '#141210',
          light: '#27241f',
          subtle: '#161310',
        },
        text: {
          primary: '#fef3c7',
          warm: '#e7e0d5',
          muted: '#78716c',
          dim: '#57534e',
          subtle: '#44403c',
          darker: '#3a3530',
          darkest: '#2c2825',
        },
        amber: {
          accent: '#f59e0b',
          dark: '#b45309',
          light: '#d97706',
          'subtle-bg': 'rgba(245, 158, 11, 0.08)',
          'subtle-border': 'rgba(245, 158, 11, 0.15)',
          'subtle-text': 'rgba(245, 158, 11, 0.18)',
          label: '#92400e',
        },
        cyan: {
          code: '#2dd4bf',
        },
        green: {
          code: '#4ade80',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': '9px',
        'sm': '10px',
        'base': '12px',
        'md': '13px',
        'lg': '14px',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.08em',
        wider: '0.1em',
        widest: '0.12em',
      },
      animation: {
        pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
export default config
