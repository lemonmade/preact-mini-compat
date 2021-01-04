const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: path.resolve("index.js"),
  output: {
    path: path.resolve("build"),
    filename: "output.js",
  },
  resolve: {
    // Switch these `alias` blocks to see the default compat behavior
    alias: {
      react$: "@quilted/preact-mini-compat",
      "react-dom$": "@quilted/preact-mini-compat",
    },
    // alias: {
    //   react$: "preact/compat",
    //   "react-dom$": "preact/compat",
    // },
    // @quilted/preact-mini-compat uses .mjs for module files, not sure why
    // they aren't found by default
    extensions: [".mjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                // Uses jsx-runtime, which is required to avoid importing the default
                // export from compat.
                { runtime: "automatic", importSource: "preact" },
                // To see the effects of not using the jsx-runtime, comment the line above
                // and uncomment the next one, and switch the imports for React in index.js.
                // { runtime: "classic" },
              ],
            ],
          },
        },
      },
      // This rule fixes an issue where @quilted/preact-mini-compat does not use
      // fully specified paths for its imports (e.g., uses bare/ relative import
      // specifiers without the extension).
      {
        test: /\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
  // Just turning module concatenation off to make it easier to see the included
  // modules in the bundle report
  optimization: {
    concatenateModules: false,
  },
};
