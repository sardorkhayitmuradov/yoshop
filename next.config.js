/** @type { import('next').NextConfig} */
const {i18n} = require("./next-i18next.config");

module.exports  = {
  images: {
    domains: ['assets.tina.io'],
  },
  reactStrictMode: true,
  i18n,
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/files/Licenses'
      })

      return config
  },
}
