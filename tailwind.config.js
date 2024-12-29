/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { opacity: '0.25' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0.25' },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(calc(-100% - 50px))',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        shine: 'shine 4s linear infinite',
        'slide-down': 'slide-down 1s ease-out forwards',
      },
      boxShadow: {
        'custom': '0 3px 3px 0 #d5d5d5', // Define your custom shadow
        'custom1': '4px 4px 0 0 rgba(99, 99, 99, 0.251)',
        'custom-black2': '6px 6px 0 0 rgba(0, 0, 0, 0.251)',
        'custom-hover': '6px 6px 0 0 rgba(0, 0, 0, 0.5)', // Darker shadow
        'custom3': '2px 2px 2px 2px #d5d5d5',
        'custom4': "6px 9px 1px #b7b7b7",
        'custom5': "6px 9px 1px #808080",
        'custom6': "6px 9px 1px #8eaf93",
        'custom7': "6px 9px 1px #404040",
      },
      backdropBlur: {
        '2px': '2px',
      },
      lineHeight: {
        'clamp-lg': 'clamp(44px, 6vw, 70px)',
      },
      margin: {
        'clamp-top': 'clamp(50px, 10vw, 250px)',
      },
      screens: {
        xl2: '1460px', // Custom screen size
        md2: '873px', // Custom screen size
        xl2: '1460px', // Custom screen size
        lg2: '1060px', // Custom screen size
        lg3: '960px', // Custom screen size
        lg4: '714px', // Custom screen size
        lg5: '1002px', // Custom screen size
        md2: '546px', // Custom screen size
        lg5: '767px', // Custom screen size
        sm3: '483px', // Custom screen size
        md3: '870px', // Custom screen size
        md4: '1130px', // Custom screen size
        md5: '1160px', // Custom screen size
        sm4: '410px', // Custom screen size
      },
      fontSize: {
        'clamp-lg': 'clamp(26px, 3.8vw, 48px)',
        'clamp-lg2': 'clamp(14px, 1.8vw, 24px)',
        'clamp-lg3': 'clamp(26px, 3vw, 36px)',
        'clamp-lg4': 'clamp(14px, 1.8vw, 24px)',
        'clamp-lg5': 'clamp(26px, 3vw, 36px)',
        'clamp-lg6': 'clamp(14px, 1.8vw, 24px)',
        'clamp-lg7': 'clamp(30px, 3.8vw, 48px)',
        'clamp-lg8': 'clamp(16px, 2vw, 24px)',
        'clamp-lg9': 'clamp(28px, 3vw, 32px)',
        'clamp-lg10': 'clamp(26px, 3.5vw, 40px);',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}