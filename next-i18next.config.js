const path = require("path");

module.exports = {
  i18n: {
    locales: ['en-US', 'kz', 'ru' , 'kr'],
    defaultLocale: 'en-US',
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};