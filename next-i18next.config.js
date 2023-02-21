const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en","kk","ko","ru"],
        localePath: path.resolve('./public/locales'),
        localeDetection: false,
    }
}