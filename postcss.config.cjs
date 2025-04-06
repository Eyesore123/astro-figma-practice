const postcssjitprops = require('postcss-jit-props');
const openProps = require('open-props');


module.exports = {
  plugins: [
    postcssjitprops({
      props: openProps,
    }),
    require('autoprefixer'),
    ],
  }