/** @type { import('next').NextConfig} */
const {i18n} = require("./next-i18next.config");
const path = require('path');

module.exports  = {
  reactStrictMode: true,
  i18n,
  ...(typeof window === undefined
    ? { localePath: path.resolve('./public/locales') }
    : {}),
  localeStructure: '{{lng}}/{{ns}}',
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/files/Licenses'
      })

      return config
  },
}
