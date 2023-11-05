const CracoAlias = require("craco-alias");

// setting for webpack
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'jsconfig',
      }
    }
  ]
};