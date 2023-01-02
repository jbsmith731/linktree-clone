/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GeneralSans', 'sans-serif'],
      },
      colors: {
        current: 'currentColor',
      },

      backgroundImage: {
        'mesh-1':
          'radial-gradient(at 26% 3%, hsla(152,88%,60%,1) 0px, transparent 50%), radial-gradient(at 51% 51%, hsla(231,63%,63%,1) 0px, transparent 50%), radial-gradient(at 89% 86%, hsla(58,92%,69%,1) 0px, transparent 50%), radial-gradient(at 48% 73%, hsla(205,86%,76%,1) 0px, transparent 50%), radial-gradient(at 76% 66%, hsla(40,60%,74%,1) 0px, transparent 50%), radial-gradient(at 16% 25%, hsla(322,99%,73%,1) 0px, transparent 50%), radial-gradient(at 48% 6%, hsla(243,88%,62%,1) 0px, transparent 50%)',
        'mesh-2':
          'radial-gradient(at 9% 69%, hsla(220,75%,76%,1) 0px, transparent 50%), radial-gradient(at 1% 49%, hsla(72,64%,71%,1) 0px, transparent 50%), radial-gradient(at 19% 66%, hsla(4,89%,60%,1) 0px, transparent 50%), radial-gradient(at 49% 10%, hsla(344,69%,69%,1) 0px, transparent 50%), radial-gradient(at 52% 59%, hsla(328,61%,74%,1) 0px, transparent 50%), radial-gradient(at 45% 34%, hsla(107,64%,74%,1) 0px, transparent 50%), radial-gradient(at 95% 80%, hsla(272,85%,73%,1) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};
