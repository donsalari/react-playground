const commonPaths = require("./common-paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const plugins = [
  new HtmlWebpackPlugin({
    template: `public/index.html`,
    favicon: `public/favicon.ico`,
  }),
];

if (process.env.ANALYZE_WEBPACK_BUNDLE === "true") {
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  entry: {
    vendor: ["react"],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [...plugins],
};

module.exports = config;
