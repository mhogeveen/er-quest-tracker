/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['eldenring.wiki.fextralife.com'],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "src/styles/variables.scss";`,
  },
}
