const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: "ru",
        locales: ["en", "ru"],
        localePath: path.resolve('./public/locales'),
        localeDetection: false,
    }
}