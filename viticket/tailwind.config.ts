import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background1: "linear-gradient(41deg, #96B7CD 27%, #E68D83 100%)"
      })
    },
  },
  plugins: [],
} satisfies Config