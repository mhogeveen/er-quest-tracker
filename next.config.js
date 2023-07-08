/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['eldenring.wiki.fextralife.com'],
  },
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "styles/variables.scss";`,
  },
}
