import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      charcoal: '#24232C',
      softPurple: '#817D92',
      lavenderGray: '#E6E5EA',
      deepSpace: '#18171F',
      mintGreen: '#A4FFAF',
      salmonRed: '#F64A4A',
      coral: '#FB7C58',
      mustardYellow: '#F8CD65',
    },
    screens: {
      tablet: '550px',
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
