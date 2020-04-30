const commonPaths = require("./common-paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index`],
  },
  output: {
    filename: "static/[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localsConvention: "camelCase",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[hash].css",
    }),
  ],
};

module.exports = config;
