import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background1: "linear-gradient(41deg, #96B7CD 27%, #E68D83 100%)",
}),
      colors:{
        bg:"linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.06)"
      }
    },
  },
  plugins: [],
} satisfies Config