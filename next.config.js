/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['eldenring.wiki.fextralife.com'],
  },
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/variables.scss";`,
  },
}
