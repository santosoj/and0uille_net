import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  basePath: '/pizzam0de',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
})