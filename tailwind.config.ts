import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      animation: {
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s  both",
      },
      keyframes: {
        "scale-in-center": {
            "0%": {
                transform: "scale(0)",
                opacity: "1"
            },
            to: {
                transform: "scale(1)",
                opacity: "1"
            }
        }, 
      }
    },
  },
  plugins: [],
}
export default config
