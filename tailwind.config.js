/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: '#0B0E11',
          surface: '#111417',
          surfaceLow: '#15181C',
          surfaceContainer: '#191C20',
          surfaceHigh: '#22262B',
          surfaceHighest: '#2B3037',
          border: '#242830',
          borderSubtle: '#1B1E24',
          borderInteractive: '#2E3540',
        },
        navy: {
          bg: '#0B0E11',
          card: '#15181C',
          cardHover: '#1C2026',
          border: '#242830',
          borderSubtle: '#1B1E24',
        },
        accent: {
          primary: '#6366F1',
          primaryLight: '#C0C1FF',
          secondary: '#BDC2FF',
          container: '#2F3AA3',
          glow: 'rgba(99, 102, 241, 0.25)',
          subtle: 'rgba(99, 102, 241, 0.08)',
        },
        electric: {
          blue: '#6366F1',
          hover: '#4F46E5',
          subtle: 'rgba(99, 102, 241, 0.1)',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#8CA0B8',
          accent: '#C0C1FF',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      lineHeight: {
        relaxedHeading: '1.15',
        article: '1.7',
      }
    },
  },
  plugins: [],
}
