/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D2A',
          50: '#FEECED',
          100: '#FDD9DB',
          200: '#FAB3B6',
          300: '#F58791',
          400: '#EE5260',
          500: '#E11D2A',
          600: '#C81622',
          700: '#A11019',
          800: '#7A0C13',
          900: '#52080D',
        },
        secondary: {
          DEFAULT: '#FF7A00',
          50: '#FFF2E6',
          100: '#FFE0C2',
          200: '#FFC285',
          300: '#FFA347',
          400: '#FF8C1F',
          500: '#FF7A00',
          600: '#CC6200',
          700: '#994900',
          800: '#663100',
          900: '#331800',
        },
        accent: {
          DEFAULT: '#FFD54F',
          light: '#FFE699',
        },
        ink: '#0F172A',
        muted: '#64748B',
        surface: '#F8FAFC',
        card: '#FFFFFF',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(15, 23, 42, 0.08)',
        card: '0 12px 40px -12px rgba(15, 23, 42, 0.12)',
        glow: '0 16px 50px -12px rgba(225, 29, 42, 0.35)',
        float: '0 20px 60px -16px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23E2E8F0' fill-opacity='0.5'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
