// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/color.scss";',
      },
    },
  },
};
