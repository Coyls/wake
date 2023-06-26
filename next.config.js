const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    /* i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
    }, */
};  