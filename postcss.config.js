const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      preserve: false,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    }),
  ],
}
