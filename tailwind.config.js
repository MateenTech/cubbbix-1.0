/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': ''
      },
      zIndex: {
        '9999': '9999',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    inset: {
      '80%': '80%',
    },
    keyframes: {
      bounce: {
        "0%": {
          transform: "translateY(-5%)",
          animation_timing_func: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "100%": {
          transform: "translateY(-5%)",
          animation_timing_func: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animation_timing_func: "cubic-bezier(0, 0, 0.2, 1)",
        }
      },
    },
    animation: {
      "illus-bounce": 'bounce 1s ease-in-out infinite',
    },
  },
  plugins: [],
}

